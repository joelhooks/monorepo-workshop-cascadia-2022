import { expect, test } from '@playwright/test'

test('should test something', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator(`text=Hello from our package!!!`)).toBeVisible()
})
