import { HighLevelProducer, Client } from 'kafka-node';

export const produce = (client: Client, message?: any) => {
  const producer = new HighLevelProducer(client);

  producer.on('ready', () => {
    if (message) {
      producer.send(message, (err, data) => {
        console.log(`Produced message => ${JSON.stringify(message)}`);
      });
    }
  });

  producer.on('error', (error: any) => {
    console.error(error);
  });

  return producer;
};
