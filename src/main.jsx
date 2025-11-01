import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Pages (existing or scaffolded below)
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import HowToUse from "./pages/HowToUse.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";

// Portfolio pages
import Work from "./pages/Work.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // original demo routes (ok to keep for now)
      { path: "features", element: <Features /> },
      { path: "pricing", element: <Pricing /> },
      { path: "how-to-use", element: <HowToUse /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "sign-in", element: <SignIn /> },

      // portfolio routes
      { path: "work", element: <Work /> },
      { path: "work/:slug", element: <Project /> },
      { path: "portfolio/:slug", element: <Project /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
