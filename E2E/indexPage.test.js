xdescribe("Home", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/");
  });
  afterAll(async () => {
    await page.teardown();
  });

  test('should be titled "Caspian"', async () => {
    await expect(page.title()).resolves.toMatch("Caspian");
  });
});
