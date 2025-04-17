const request = require("supertest")
const app = require("./server")


test("testing  the functionality of get in server", async() => {
    const res = await request(app).get("/")
    expect(Array.isArray(res.body)).toBe(true)
} )