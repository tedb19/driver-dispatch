import { Client } from 'kafka-node';
import { DRIVER_REQUEST, DRIVER_DISPATCH, ZOOKEEPER } from '../constants';
import { produce } from '../kafka_utils/producer';
import { consume } from '../kafka_utils/consumer';
import { getDriverByLocation } from './drivers';

const client = new Client(ZOOKEEPER);
const subscribedTopics = [{ topic: DRIVER_REQUEST }];

const getProducerRequest = (location: string) => {
  return [
    {
      topic: DRIVER_DISPATCH,
      messages: JSON.stringify(getDriverByLocation(location)),
      partition: 0,
    },
  ];
};

const onMessageCb = (message: any) => {
  console.log('Recieved message from cab service => ', JSON.stringify(message));
  const producer = produce(client);
  const producerRequest = getProducerRequest(message.value);
  producer.send(producerRequest, (err, data) => {
    console.log(`Produced message => ${JSON.stringify(producerRequest)}`);
  });
};

consume(client, subscribedTopics, onMessageCb);
