// kafkaConsumer.js
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'your-app',
  brokers: [process.env.KAFKA_SERVERS]
});

const consumer = kafka.consumer({ groupId: 'your-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'your-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    }
  });
};

run().catch(console.error);
