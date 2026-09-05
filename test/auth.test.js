const test = require('node:test');
const assert = require('node:assert');
const authService = require('../src/services/authService');

test('AuthService generates and verifies valid JWT tokens', () => {
  const payload = { userId: 'usr_100', role: 'Instructor' };
  const token = authService.generateToken(payload);
  assert.ok(token, 'Token should be generated');

  const verified = authService.verifyToken(token);
  assert.strictEqual(verified.userId, 'usr_100');
  assert.strictEqual(verified.role, 'Instructor');
});

test('AuthService rejects tampered tokens', () => {
  const token = authService.generateToken({ userId: 'usr_100' });
  const tampered = token + 'tamper';
  assert.strictEqual(authService.verifyToken(tampered), null);
});
