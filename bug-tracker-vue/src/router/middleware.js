import store from '../store/index';

export default function authCheck({ next }) {
  if (!store.state.status.loggedIn) {
    console.log('Middlware Redirect');
    return next({
      name: 'loginForm'
    });
  }

  console.log('Middleware Passthru');
  return next();
}
