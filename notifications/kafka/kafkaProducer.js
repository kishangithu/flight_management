// kafkaProducer.js
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'your-app',
  brokers: [process.env.KAFKA_SERVERS]
});

const producer = kafka.producer();

export const sendMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }]
  });
};

// Initialize producer
producer.connect();
