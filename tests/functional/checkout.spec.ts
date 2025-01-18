import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Verify Checkout Process', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillShippingDetails('John', 'Dou', '12345');
    await checkoutPage.finishCheckout();

    const confirmationText = await checkoutPage.getOrderConfirmation();
    expect(confirmationText).toBe('Thank you for your order!');
  });
});
