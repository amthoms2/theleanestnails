
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

// const config = {
//   headers:  { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY2MDgwOTQ5NTdkZTg5ZGRhNjM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODgyNjEzMywiZXhwIjoxNjQ0MDEwMTMzfQ.UsDOFIIMYgAigLSWto3foomnzB4YdNLTJaCpQSpzhYE`}
// }

