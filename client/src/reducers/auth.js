import { AUTH } from "../constants/actionTypes";

//"posts" = "state"

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authDate: action?.data };

    default:
      return state;
  }
};

export default authReducer;
