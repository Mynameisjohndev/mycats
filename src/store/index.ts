import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import userListSlice from "./reducers/cats";

const rootReducer = combineReducers({
  userList: userListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
