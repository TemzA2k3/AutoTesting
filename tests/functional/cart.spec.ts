import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Verify Adding Item to Cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const isItemVisible = await cartPage.isItemVisible('Sauce Labs Backpack');
    expect(isItemVisible).toBeTruthy();
  });

  test('Verify Removing Item from Cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await cartPage.removeItem('Sauce Labs Backpack');

    const isItemVisible = await cartPage.isItemVisible('Sauce Labs Backpack');
    expect(isItemVisible).toBeFalsy();
  });
});
