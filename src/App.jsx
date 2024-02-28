import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import MainLayout from "./components/layouts/MainLayout";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // all routers
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
        </Route>
        {isSignedIn && (
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
