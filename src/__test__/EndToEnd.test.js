// 1
import puppeteer from "puppeteer";


describe("show/hide an event details", () => {
  let browser;
  let page;

  // 2
  beforeAll(async () => {
    jest.setTimeout(50000);


    browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      ignoreDefaultArgs: ["--disable-extensions"]
    });

    page = await browser.newPage();

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(async () => {
    browser.close();
  });

  // 3
  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .more-details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event-button");
    const eventDetails = await page.$(".event .more-details ");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event-button");
    const eventDetails = await page.$(".event .more-details");
    expect(eventDetails).toBeNull();
  });

});

describe("Filter events by city", () => {

  let browser;
  let page;
  jest.setTimeout(30000);

  beforeAll(async () => {

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ["--disable-extensions"]
    })
    page = await browser.newPage();

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");

  });

  afterAll(async () => {
    browser.close();
  });

  test("When user has not searched for a city, show upcoming events from all cities", async () => {
    const numberEvents = await page.$$eval(".event", (element) => element.length);
    expect(numberEvents).toBe(30);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin", { delay: 100 });
    const numberSuggestions = await page.$$eval(".suggestions li", (element) => element.length);
    expect(numberSuggestions).toBe(2);
  });

  test("User can select a city from suggested list", async () => {
    await page.click(".suggestions li");

    const numberEvents = await page.$$eval(".event", (element) => element.length);
    expect(numberEvents).toBe(1)
  });

});