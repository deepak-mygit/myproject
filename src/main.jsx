import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

// Adjust paths if your app is hosted in a subdirectory (e.g., /myproject/)
const router = createBrowserRouter([
  {
    path: "/myproject/",
    element: <App />,
    children: [
      {
        path: "", // Empty string means this will match "/myproject/"
        element: <Home />,
      },
      {
        path: "contact", // Relative path, so it becomes "/myproject/contact"
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
