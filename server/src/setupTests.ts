import mongoose from 'mongoose';

jest.mock('mongoose', () => {
  const actualMongoose = jest.requireActual('mongoose');
  return {
    ...actualMongoose,
    connect: jest.fn(() => Promise.resolve()),
    connection: {
      ...actualMongoose.connection,
      close: jest.fn(() => Promise.resolve()),
    },
    Schema: actualMongoose.Schema,
  };
});

afterAll(async () => {
  await mongoose.connection.close();
});

