import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// sign in

export const signin = (formData) => API.post("/user/signin", formData);

// sign up

export const signup = (formData) => API.post("/user/signup", formData);
