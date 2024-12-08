import { test, expect } from '@playwright/test';
import { selectors } from '../../helpers/selectors';

test.describe('Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.fill(selectors.usernameInput, 'standard_user');
    await page.fill(selectors.passwordInput, 'secret_sauce');
    await page.click(selectors.loginButton);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Verify Adding Item to Cart', async ({ page }) => {
    const addToCartButton = selectors.addToCartButton('Sauce Labs Backpack');

    await page.waitForSelector(addToCartButton, { state: 'visible' });
    await page.locator(addToCartButton).click();

    await expect(page.locator(selectors.cartBadge)).toHaveText('1');
    await page.click(selectors.cartButton);
    await expect(page.locator(selectors.cartItem('Sauce Labs Backpack'))).toBeVisible();
  });

  test('Verify Removing Item from Cart', async ({ page }) => {
    const addToCartButton = selectors.addToCartButton('Sauce Labs Backpack');

    await page.waitForSelector(addToCartButton, { state: 'visible' });
    await page.locator(addToCartButton).click();

    await page.click(selectors.cartButton);
    await expect(page.locator(selectors.cartItem('Sauce Labs Backpack'))).toBeVisible();

    const removeButton = page.locator(selectors.cartItem('Sauce Labs Backpack')).locator('button:has-text("Remove")');
    await removeButton.click();
    await expect(page.locator(selectors.cartBadge)).not.toBeVisible();
  });
});
