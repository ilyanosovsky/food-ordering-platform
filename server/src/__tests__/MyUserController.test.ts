import { Request, Response } from "express";
import MyUserController from "../controllers/MyUserController";
import User from "../models/user";

jest.mock("../models/user");

describe("MyUserController", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let mockStatus: jest.Mock;
  let mockJson: jest.Mock;
  let mockSend: jest.Mock;

  beforeEach(() => {
    mockStatus = jest.fn().mockReturnThis();
    mockJson = jest.fn().mockReturnThis();
    mockSend = jest.fn().mockReturnThis();
    res = {
      status: mockStatus,
      json: mockJson,
      send: mockSend,
    };
    req = {};
  });

  describe("getCurrentUser", () => {
    it("should return 404 if user is not found", async () => {
      (User.findOne as jest.Mock).mockResolvedValueOnce(null);
      req.userId = "someUserId";

      await MyUserController.getCurrentUser(req as Request, res as Response);

      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ message: "User not found" });
    });

    it("should return user if found", async () => {
      const user = { _id: "someUserId", name: "John Doe" };
      (User.findOne as jest.Mock).mockResolvedValueOnce(user);
      req.userId = "someUserId";

      await MyUserController.getCurrentUser(req as Request, res as Response);

      expect(mockJson).toHaveBeenCalledWith(user);
    });
  });

  // describe("createCurrentUser", () => {
  //   it("should return 200 if user already exists", async () => {
  //     const existingUser = { auth0Id: "someAuth0Id" };
  //     (User.findOne as jest.Mock).mockResolvedValueOnce(existingUser);
  //     req.body = { auth0Id: "someAuth0Id" };

  //     await MyUserController.createCurrentUser(req as Request, res as Response);

  //     expect(mockStatus).toHaveBeenCalledWith(200);
  //   });

  //   it("should create a new user if not exists", async () => {
  //     (User.findOne as jest.Mock).mockResolvedValueOnce(null);

  //     const newUser = {
  //       _id: "someUserId",
  //       auth0Id: "someAuth0Id",
  //       save: jest.fn().mockResolvedValueOnce(true),
  //       toObject: jest.fn().mockReturnValue({
  //         _id: "someUserId",
  //         auth0Id: "someAuth0Id",
  //       }),
  //     };

  //     // Mock the User constructor to return the newUser instance when instantiated
  //     const UserMock = jest.fn().mockImplementation(() => newUser);
  //     (User as unknown as jest.Mock).mockImplementation(UserMock);

  //     req.body = { auth0Id: "someAuth0Id" };

  //     await MyUserController.createCurrentUser(req as Request, res as Response);

  //     expect(mockStatus).toHaveBeenCalledWith(201);
  //     expect(mockJson).toHaveBeenCalledWith(newUser.toObject());
  //   });
  // });

  //   describe('updateCurrentUser', () => {
  //     it('should return 404 if user is not found', async () => {
  //       (User.findById as jest.Mock).mockResolvedValueOnce(null);
  //       req.userId = 'someUserId';
  //       req.body = {};

  //       await MyUserController.updateCurrentUser(req as Request, res as Response);

  //       expect(mockStatus).toHaveBeenCalledWith(404);
  //       expect(mockJson).toHaveBeenCalledWith({ message: 'User not found' });
  //     });

  //     it('should update the user if found', async () => {
  //       const user = {
  //         _id: 'someUserId',
  //         save: jest.fn().mockResolvedValueOnce(true),
  //         name: '',
  //         addressLine1: '',
  //         city: '',
  //         country: '',
  //       };
  //       (User.findById as jest.Mock).mockResolvedValueOnce(user);
  //       req.userId = 'someUserId';
  //       req.body = {
  //         name: 'John Doe',
  //         addressLine1: '123 Main St',
  //         city: 'Metropolis',
  //         country: 'Countryland',
  //       };

  //       await MyUserController.updateCurrentUser(req as Request, res as Response);

  //       expect(user.name).toBe(req.body.name);
  //       expect(user.addressLine1).toBe(req.body.addressLine1);
  //       expect(user.city).toBe(req.body.city);
  //       expect(user.country).toBe(req.body.country);
  //       expect(mockJson).toHaveBeenCalledWith(user);
  //     });
  //   });
});
