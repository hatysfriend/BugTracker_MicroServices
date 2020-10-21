export default function authCheck({ next, store }) {
  if (!store.getters.auth.loggedIn) {
    return next({
      name: 'main'
    });
  }

  return next();
}
