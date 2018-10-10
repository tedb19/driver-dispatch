import { Client } from 'kafka-node';
import { DRIVER_REQUEST, DRIVER_DISPATCH, ZOOKEEPER } from '../constants';
import { produce } from '../kafka_utils/producer';
import { consume } from '../kafka_utils/consumer';

const subscribedTopics = [{ topic: DRIVER_DISPATCH }];
const client = new Client(ZOOKEEPER);

const getProducerRequest = (location: string) => {
  return [{ topic: DRIVER_REQUEST, messages: location }];
};

const onMessageCb = (message: any) => {
  console.log(`Recieved message from driver service:
        Topic: ${message.topic}
        Message: ${message.value}`);
};

consume(client, subscribedTopics, onMessageCb);

produce(client, getProducerRequest('Hamburg'));
produce(client, getProducerRequest('Nairobi'));
