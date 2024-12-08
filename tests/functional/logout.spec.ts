import { test, expect } from '@playwright/test';
import { selectors } from '../../helpers/selectors';

test.describe('Logout Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.fill(selectors.usernameInput, 'standard_user');
    await page.fill(selectors.passwordInput, 'secret_sauce');
    await page.click(selectors.loginButton);
  });

  test('Verify User is able to logout', async ({ page }) => {
    await page.click(selectors.menuButton);
    await expect(page.locator('#react-burger-cross-btn')).toBeVisible();
    await page.click(selectors.logoutButton);
    await expect(page.locator(selectors.usernameInput)).toBeVisible();
  });
});
