import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillShippingDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
  }

  async finishCheckout() {
    await this.page.click('#finish');
  }

  async getOrderConfirmation(): Promise<string> {
    return this.page.locator('.complete-header').textContent();
  }
}
