import jwtSerializer from '../scripts/jwt-serializer';

export default function authCheck({ next }) {
  if (!jwtSerializer.getJwt()) {
    return next({
      name: 'loginForm'
    });
  }

  return next();
}
