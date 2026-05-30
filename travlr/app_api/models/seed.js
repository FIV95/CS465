const mongoose = require('mongoose');
const Trip = require('./travlr');
const trips = require('../../data/trips.json');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log(`Mongoose connected to ${dbURI}`);

    await Trip.deleteMany({});
    console.log('Existing trips removed');

    await Trip.insertMany(trips);
    console.log(`${trips.length} trips inserted`);

    const count = await Trip.countDocuments();
    console.log(`Trips collection now contains ${count} documents`);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log('Mongoose connection closed');
  }
};

seedDatabase();
