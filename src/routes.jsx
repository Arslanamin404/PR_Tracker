import { AddRecord } from "./components/addRecord";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { Records } from "./components/Records";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <AddRecord /> },
      { path: "records", element: <Records /> },
    ],
  },
]);

export default router;
