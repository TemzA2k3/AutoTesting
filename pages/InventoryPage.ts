import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart(item: string) {
    const selector = `[data-test="add-to-cart-${item.toLowerCase().replace(/ /g, '-')}"]`;
    await this.page.click(selector);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
