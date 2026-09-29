// Sales settings for Pocket CAD Pro. Edit these before going live.

// Shown on the plan screen. Japanese consumer prices must be tax-inclusive (総額表示).
export const PRICE_YEN = 9900;
export const PRICE_LABEL = '月額 9,900円（税込）';

// Checkout page (e.g. a Stripe Payment Link). Empty = the purchase button explains
// that sales have not started yet.
export const PURCHASE_URL = '';

// Where buyers get help / receive their key. Shown on the plan screen.
export const SUPPORT_CONTACT = '';

export const TRIAL_DAYS = 14;

// Public half of the license signing key (ECDSA P-256, JWK).
// Written by `node tools/license/issue.mjs init`; the private key never leaves your machine.
export const PUBLIC_KEY_JWK = null;
