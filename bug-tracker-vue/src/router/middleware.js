export default function authCheck({ next, store }) {
  if (!store.getters.auth.loggedIn) {
    console.log(`MIDDLEWARE: ${JSON.stringify(store.getters.auth.loggedIn)}`);
    return next({
      name: 'registerForm'
    });
  }

  return next();
}
