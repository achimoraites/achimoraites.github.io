import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://achimoraites.github.io/
  await page.goto('https://achimoraites.github.io/');
  // Click text=Blog
  await page.locator('text=Blog').click();
  await expect(page).toHaveURL('https://achimoraites.github.io/blog');
  // Click span:has-text("Blog Posts")
  await page.locator('span:has-text("Blog Posts")').click();
  // Go to https://achimoraites.github.io/blog
  await page.goto('https://achimoraites.github.io/blog');
  // Click nav >> text=Achilles Moraites
  await page.locator('nav >> text=Achilles Moraites').click();
  // Click text=Home
  await page.locator('text=Home').click();
  await expect(page).toHaveURL('https://achimoraites.github.io/');
  // Click text=I am a software engineering lover that actively looks for ways to improve the qu
  await page.locator('text=I am a software engineering lover that actively looks for ways to improve the qu').click();

});