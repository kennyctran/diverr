xdescribe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });
  afterAll(async () => {
    await page.teardown();
  });

  test('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch("Google");
  });
});
