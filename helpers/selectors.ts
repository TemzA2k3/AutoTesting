export const selectors = {
  usernameInput: '#user-name',
  passwordInput: '#password',
  loginButton: '#login-button',
  appLogo: '.app_logo',
  cartBadge: '.shopping_cart_badge',
  cartButton: '.shopping_cart_link',
  addToCartButton: (item: string) => `[data-test="add-to-cart-${item.toLowerCase().replace(/ /g, '-')}"]`,
  cartItem: (item: string) => `.cart_item:has-text("${item}")`,
  checkoutButton: '#checkout',
  continueButton: '#continue',
  firstNameInput: '#first-name',
  lastNameInput: '#last-name',
  postalCodeInput: '#postal-code',
  summaryTotal: '.summary_total_label',
  finishButton: '#finish',
  completeOrderHeader: '.complete-header',
  errorMessage: '.error-message-container',
  menuButton: '#react-burger-menu-btn',
  logoutButton: '#logout_sidebar_link',
};
