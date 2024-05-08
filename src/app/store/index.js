import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// import all toolkit reducers
import auth from "./toolkit/auth";

// here is auth and layout are persist reducer
const rootReducer = {
	auth: persistReducer({ key: "auth", storage }, auth),
};

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: false,
	}),
	thunk,
	// logger,
];

// Create the store
export const store = configureStore({
	reducer: rootReducer,
	middleware,
});

// Initialize the persistence layer
export const persistor = persistStore(store);
