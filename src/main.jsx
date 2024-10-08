import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import Signin from "./components/Signin.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import GptSearchPage from "./components/GptSearchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      { path: "/browse", element: <Body /> },
      { path: "/search", element: <GptSearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
