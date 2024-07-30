// init.js
const mongoose = require('mongoose');
const uri = 'mongodb://mongo:27017/flight_status'; // Adjust URI as needed

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example of creating an initial collection
const Flight = mongoose.model('Flight', new mongoose.Schema({
  flightNumber: String,
  status: String
}));

const seedData = async () => {
  await Flight.create([
    { flightNumber: 'AA123', status: 'On Time' },
    { flightNumber: 'BB456', status: 'Delayed' }
  ]);
  console.log('Database seeded');
};

seedData().then(() => mongoose.disconnect());
