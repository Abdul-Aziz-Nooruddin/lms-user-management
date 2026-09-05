/**
 * LMS Authentication & Token Service
 * Author: Abdul Aziz Nooruddin
 */

const crypto = require('crypto');

class AuthService {
  constructor() {
    this.tokenStore = new Map();
  }

  generateToken(payload) {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 3600000 })).toString('base64url');
    const secret = process.env.JWT_SECRET || 'default_lms_secret_2026';
    const signature = crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest('base64url');

    return `${header}.${body}.${signature}`;
  }

  verifyToken(token) {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [header, body, signature] = parts;
    const secret = process.env.JWT_SECRET || 'default_lms_secret_2026';
    const expectedSig = crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest('base64url');

    if (signature !== expectedSig) return null;

    try {
      const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
      if (payload.exp && Date.now() > payload.exp) return null;
      return payload;
    } catch {
      return null;
    }
  }
}

module.exports = new AuthService();
