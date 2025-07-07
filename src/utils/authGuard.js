export function authGuard(to, from, next, store) {
  const isAuthenticated = store.getters['user/isAuthenticated'];
  if (!isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}
