const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.earnin.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/You worked today. Get paid today | Earnin/);
});