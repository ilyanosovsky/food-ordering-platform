import request from "supertest";
import app from "../app";
import mongoose from "mongoose";

// Close mongoose connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /health", () => {
  it("should return health OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("health OK!");
  });
});

describe("Middleware", () => {
  it("should use CORS", async () => {
    const res = await request(app).get("/health");
    expect(res.headers["access-control-allow-origin"]).toBe("*"); // Adjust based on your CORS settings
  });

  it("should parse JSON", async () => {
    const res = await request(app)
      .post("/api/my/user") // Replace with an actual endpoint that accepts POST requests
      .send({ key: "value" })
      .set("Content-Type", "application/json");
    expect(res.status).not.toBe(400); // Check if JSON parsing is successful
  });
});

describe("Routes", () => {
  it("should handle /api/my/user route", async () => {
    const res = await request(app).get("/api/my/user"); // Adjust as per your route requirements
    expect(res.status).not.toBe(404);
  });

  it("should handle /api/my/restaurant route", async () => {
    const res = await request(app).get("/api/my/restaurant"); // Adjust as per your route requirements
    expect(res.status).not.toBe(404);
  });

  it("should handle /api/restaurant/:restaurantId route", async () => {
    const res = await request(app).get("/api/restaurant/someRestaurantId"); // Replace 'someRestaurantId' with a valid ID if necessary
    console.log("Response body:", res.body);
    console.log("Response status:", res.status);
    expect(res.status).not.toBe(404);
  });

  it("should handle /api/restaurant/search/:city route", async () => {
    const res = await request(app).get("/api/restaurant/search/haifa"); // Replace 'someCity' with a valid city name if necessary
    console.log("Response body:", res.body);
    console.log("Response status:", res.status);
    expect(res.status).not.toBe(404);
  }, 10000); // Increase timeout to 10 seconds

  it("should handle /api/order route", async () => {
    const res = await request(app).get("/api/order"); // Adjust as per your route requirements
    expect(res.status).not.toBe(404);
  });
});
