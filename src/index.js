import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { persistor, store } from "@/store";
import App from "@/main";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
					<Toaster />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</>
);
