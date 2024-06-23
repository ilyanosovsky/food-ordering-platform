import mongoose from 'mongoose';

jest.mock('mongoose', () => {
  const actualMongoose = jest.requireActual('mongoose');
  const mockModel = {
    countDocuments: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
  };
  return {
    ...actualMongoose,
    connect: jest.fn(() => Promise.resolve()),
    connection: {
      ...actualMongoose.connection,
      close: jest.fn(() => Promise.resolve()),
    },
    model: jest.fn().mockReturnValue(mockModel),
    Schema: actualMongoose.Schema,
  };
});

afterAll(async () => {
  await mongoose.connection.close();
});

