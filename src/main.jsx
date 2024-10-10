import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { persist, store } from "./app/store.js"; // Ensure store is correctly exported from store.js
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
