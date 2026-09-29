#!/usr/bin/env node
// License key tool for Pocket CAD Pro.
//
//   node tools/license/issue.mjs init
//       Creates the signing key pair. The private key is written to
//       tools/license/private-key.pem (git-ignored); the public key is written
//       into js/license-config.js so the app can verify keys offline.
//
//   node tools/license/issue.mjs issue <customer> <YYYY-MM-DD>
//       Prints a license key valid through the given date (inclusive).
//       For a monthly plan, issue each month with the paid-through date
//       (plus a few days of grace if you like).
//
// Key format: PCP1.<payload base64url>.<signature base64url>
// payload = {"sub": customer, "plan": "pro", "exp": "YYYY-MM-DD", "iat": unix seconds}
import { generateKeyPairSync, createPrivateKey, sign } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(here, 'private-key.pem');
const CONFIG = join(here, '..', '..', 'js', 'license-config.js');
const b64url = (buf) => Buffer.from(buf).toString('base64url');

const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'init') {
  if (existsSync(KEY_FILE) && !args.includes('--force')) {
    console.error(`${KEY_FILE} already exists. Re-running would invalidate every issued key (use --force if you really mean it).`);
    process.exit(1);
  }
  const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
  writeFileSync(KEY_FILE, privateKey.export({ type: 'pkcs8', format: 'pem' }), { mode: 0o600 });
  const { kty, crv, x, y } = publicKey.export({ format: 'jwk' });
  const src = readFileSync(CONFIG, 'utf8');
  const line = `export const PUBLIC_KEY_JWK = ${JSON.stringify({ kty, crv, x, y })};`;
  writeFileSync(CONFIG, src.replace(/^export const PUBLIC_KEY_JWK = .*;$/m, line));
  console.log(`Private key: ${KEY_FILE}  (keep it secret, back it up)`);
  console.log(`Public key written to ${CONFIG}. Commit that file and deploy.`);
} else if (cmd === 'issue') {
  const [sub, exp] = args;
  if (!sub || !/^\d{4}-\d{2}-\d{2}$/.test(exp || '')) {
    console.error('usage: issue <customer> <YYYY-MM-DD>');
    process.exit(1);
  }
  if (!existsSync(KEY_FILE)) { console.error('Run "init" first.'); process.exit(1); }
  const payload = b64url(JSON.stringify({ sub, plan: 'pro', exp, iat: Math.floor(Date.now() / 1000) }));
  const body = `PCP1.${payload}`;
  // ieee-p1363 (raw r||s) is the signature encoding WebCrypto verifies.
  const sig = sign('sha256', Buffer.from(body), { key: createPrivateKey(readFileSync(KEY_FILE)), dsaEncoding: 'ieee-p1363' });
  console.log(`${body}.${b64url(sig)}`);
} else {
  console.log('usage:\n  issue.mjs init\n  issue.mjs issue <customer> <YYYY-MM-DD>');
  process.exit(cmd ? 1 : 0);
}
