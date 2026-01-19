import { test, expect } from '@playwright/test';

test.describe('Generate View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('should display generate page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Generate');
  });

  test('should allow text input', async ({ page }) => {
    const input = page.locator('textarea');
    await input.fill('birthday party');
    await expect(input).toHaveValue('birthday party');
  });

  test('should show character count', async ({ page }) => {
    const input = page.locator('textarea');
    await input.fill('test');
    await expect(page.locator('text=/\\d+\\/200/')).toBeVisible();
  });
});
