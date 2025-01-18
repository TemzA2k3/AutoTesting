import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItem(item: string) {
    const selector = `.cart_item:has-text("${item}") button:has-text("Remove")`;
    await this.page.click(selector);
  }

  async isItemVisible(item: string): Promise<boolean> {
    const selector = `.cart_item:has-text("${item}")`;
    return this.page.locator(selector).isVisible();
  }
}
