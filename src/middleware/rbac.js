/**
 * LMS Role-Based Access Control (RBAC) Middleware & Policy Engine
 * Author: Abdul Aziz Nooruddin
 */

const ROLES = {
  STUDENT: 'Student',
  INSTRUCTOR: 'Instructor',
  TEACHING_ASSISTANT: 'TeachingAssistant',
  SUPER_ADMIN: 'SuperAdmin'
};

const PERMISSIONS = {
  [ROLES.STUDENT]: ['view_courses', 'enroll_course', 'submit_assignment', 'view_grades'],
  [ROLES.TEACHING_ASSISTANT]: ['view_courses', 'grade_assignment', 'respond_discussions'],
  [ROLES.INSTRUCTOR]: ['view_courses', 'create_course', 'edit_course', 'grade_assignment', 'manage_syllabus'],
  [ROLES.SUPER_ADMIN]: ['*']
};

function hasPermission(userRole, requiredPermission) {
  if (!userRole) return false;
  if (userRole === ROLES.SUPER_ADMIN) return true;

  const permissions = PERMISSIONS[userRole] || [];
  return permissions.includes(requiredPermission) || permissions.includes('*');
}

function requireRole(allowedRoles = []) {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Access denied: insufficient privileges' });
    }
    next();
  };
}

module.exports = {
  ROLES,
  PERMISSIONS,
  hasPermission,
  requireRole
};
