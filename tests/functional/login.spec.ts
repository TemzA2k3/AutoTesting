import { test, expect } from '@playwright/test';
import { selectors } from '../../helpers/selectors';

test.describe('Login Tests', () => {
  test('Verify User Login', async ({ page }) => {
    await page.goto('/');
    await page.fill(selectors.usernameInput, 'standard_user');
    await page.fill(selectors.passwordInput, 'secret_sauce');
    await page.click(selectors.loginButton);
    await expect(page.locator(selectors.appLogo)).toHaveText('Swag Labs');
  });

  test('Verify Non-Existing User Is not Able to Login', async ({ page }) => {
    await page.goto('/');
    await page.fill(selectors.usernameInput, 'standard_user_123');
    await page.fill(selectors.passwordInput, 'secret_sauce_123');
    await page.click(selectors.loginButton);
    await expect(page.locator(selectors.errorMessage)).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
