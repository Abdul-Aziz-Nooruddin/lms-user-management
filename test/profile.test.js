const test = require('node:test');
const assert = require('node:assert');
const profileService = require('../src/services/profileService');

test('ProfileService creates and updates learner profiles', () => {
  const profile = profileService.createProfile('usr_200', {
    bio: 'Smart contract enthusiast',
    skills: ['Solidity', 'JavaScript']
  });

  assert.strictEqual(profile.userId, 'usr_200');
  assert.deepStrictEqual(profile.skills, ['Solidity', 'JavaScript']);

  const updated = profileService.updateSkills('usr_200', ['Web3', 'Solidity']);
  assert.ok(updated.skills.includes('Web3'));
  assert.strictEqual(updated.skills.length, 3);
});
