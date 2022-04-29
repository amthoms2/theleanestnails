
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.isAdmin && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
