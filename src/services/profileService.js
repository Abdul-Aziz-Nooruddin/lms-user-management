/**
 * LMS User Profile Management Service
 * Author: Abdul Aziz Nooruddin
 */

class ProfileService {
  constructor() {
    this.profiles = new Map();
  }

  createProfile(userId, data) {
    const profile = {
      userId,
      bio: data.bio || '',
      enrolledCourses: data.enrolledCourses || [],
      skills: data.skills || [],
      updatedAt: new Date().toISOString()
    };
    this.profiles.set(userId, profile);
    return profile;
  }

  getProfile(userId) {
    return this.profiles.get(userId) || null;
  }

  updateSkills(userId, skills = []) {
    const profile = this.getProfile(userId) || this.createProfile(userId, {});
    profile.skills = Array.from(new Set([...profile.skills, ...skills]));
    profile.updatedAt = new Date().toISOString();
    return profile;
  }
}

module.exports = new ProfileService();
