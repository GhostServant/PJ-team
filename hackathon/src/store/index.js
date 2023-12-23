import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { roleAPI } from "./role/roleSlice";
import { userAPI } from "./user/userSlice";

const rootReducer = combineReducers({
  [roleAPI.reducerPath]: roleAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roleAPI.middleware),
});
