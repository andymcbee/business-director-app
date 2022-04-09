import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
