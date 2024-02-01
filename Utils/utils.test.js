const supertest = require("supertest");
const checkIsUppercase = require("./stringUtils");
const app = require("../app");

describe("Checks if the string is entirely in uppercase ", () => {
  it("Returns false if string is empty ", () => {
    expect(checkIsUppercase("")).toBe(false);
  });
  it("Returns false if string is number", () => {
    expect(checkIsUppercase(4)).toBe(false);
  });

  it("Returns true if all letters are uppercase and there are only letters", () => {
    expect(checkIsUppercase("HeLLO")).toBe(false);
    expect(checkIsUppercase("HELLO T  HERE")).toBe(false);
  });
});

describe("route that responds with capital username with no spaces", () => {
  it("respond with capital username", async () => {
    const response = await supertest(app).get("/users/capitalStudentName/1");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("INGABERGORTON");
  });
});

describe("route that with limited users or all users", () => {
  it("respond with all users", async () => {
    const response = await supertest(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("respond with all users with limit", async () => {
    const response = await supertest(app).get("/users/?limit=1");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBe(1);
  });

  it("respond with all users if a linit query is a string", async () => {
    const response = await supertest(app).get("/users/?limit=banana");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length > 1).toBe(true);
  });
});
