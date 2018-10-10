import { HighLevelConsumer, Topic, Client } from 'kafka-node';

export const consume = (
  client: Client,
  topics: Topic[],
  onMessage: Function,
) => {
  const consumer = new HighLevelConsumer(client, topics, {
    groupId: 'driver-dispatch',
  });

  consumer.on('message', (message: any) => {
    onMessage(message);
  });

  consumer.on('error', (error: any) => {
    consumer.addTopics(topics);
  });

  process.on('SIGINT', () => {
    consumer.close(true, () => {
      process.exit();
    });
  });
};
