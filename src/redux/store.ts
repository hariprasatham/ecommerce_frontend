import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const ignoreRegisterMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (action.type !== "REGISTER") {
      return next(action);
    }
  };

export const store = configureStore({
  reducer: persistReducer(persistConfig, cartReducer),
  middleware: [ignoreRegisterMiddleware],
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
