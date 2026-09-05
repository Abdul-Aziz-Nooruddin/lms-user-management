const test = require('node:test');
const assert = require('node:assert');
const { ROLES, hasPermission } = require('../src/middleware/rbac');

test('SuperAdmin possesses wildcard permissions', () => {
  assert.strictEqual(hasPermission(ROLES.SUPER_ADMIN, 'any_action_ever'), true);
});

test('Student has permission to view courses and submit assignments', () => {
  assert.strictEqual(hasPermission(ROLES.STUDENT, 'view_courses'), true);
  assert.strictEqual(hasPermission(ROLES.STUDENT, 'submit_assignment'), true);
  assert.strictEqual(hasPermission(ROLES.STUDENT, 'create_course'), false);
});

test('Instructor has permission to create courses', () => {
  assert.strictEqual(hasPermission(ROLES.INSTRUCTOR, 'create_course'), true);
  assert.strictEqual(hasPermission(ROLES.INSTRUCTOR, 'view_courses'), true);
});
