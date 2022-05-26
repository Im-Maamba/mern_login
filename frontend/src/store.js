import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userreducers";
const reducer = {
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
};
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = configureStore({
  reducer,
  initialState,
  middleware,
});

export default store;
