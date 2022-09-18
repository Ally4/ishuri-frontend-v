import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "../types/loginTypes";
import axios from "axios";

export const loginAction = (data,history) => async (dispatch) => {

    try {
    dispatch(loginRequest());
    const res = await axios.post("http://localhost:1234/api/v1/signin", data);

    const user = await res.data;
    localStorage.setItem("token", user.token);
    // localStorage.setItem('user-data', JSON.stringify(user));

    history.push('/dashboard')
    dispatch(loginSuccess(user));

    
    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        dispatch(loginFails(errorMessage))
    }
    else{
        dispatch(loginFails("Error, please check your connection and try again!"))
    }
    }
};

export const loginRequest = () => {
  return {
    type: LOGIN_USER_START,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};
export const loginFails = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: error,
  };
};
