const request = require("supertest");
const app = require("../server");

describe("GET /health", () => {
  it("should return health message", async () => {
    const res = await request(app).get("/health");
    expect(res.text).toBe("Health from Rebase C & D");
  });
});
