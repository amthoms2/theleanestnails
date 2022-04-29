import { loginFailure, loginStart, loginSuccess } from "../userRedux";
import authHeader from "../../services/authHeader";
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/api/auth/login', user, { headers: authHeader()});
    console.log('res in apo', res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
