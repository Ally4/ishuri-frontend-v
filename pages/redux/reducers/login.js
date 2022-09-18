import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "../types/loginTypes";

const initialState = {
  loading: "none",
  data: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        loading: "block",
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: "none",
        data: action.payload,
        error: "",
      };
    case LOGIN_USER_FAIL:
      return {
        loading: "none",
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
