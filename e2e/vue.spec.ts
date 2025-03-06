import { test, expect } from '@playwright/test';

test('checks if the page contains an element with class "header"', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.header')).toBeVisible();
});

