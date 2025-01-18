import { test, expect } from '@playwright/test';
import { selectors } from '../../helpers/selectors';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.fill(selectors.usernameInput, 'standard_user');
    await page.fill(selectors.passwordInput, 'secret_sauce');
    await page.click(selectors.loginButton);
  });

  test('Verify Checkout Process', async ({ page }) => {
    await page.click(selectors.addToCartButton('Sauce Labs Backpack'));
    await page.click(selectors.cartButton);
    await page.click(selectors.checkoutButton);
    await page.fill(selectors.firstNameInput, 'John');
    await page.fill(selectors.lastNameInput, 'Dou');
    await page.fill(selectors.postalCodeInput, '12345');
    await page.click(selectors.continueButton);
    await expect(page.locator(selectors.summaryTotal)).toHaveText('Total: $32.39');
    await page.click(selectors.finishButton);
    await expect(page.locator(selectors.completeOrderHeader)).toHaveText('Thank you for your order!');
  });
});
