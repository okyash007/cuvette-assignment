import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./layout/Layout";
import Home from "./pages/home/index";
import Notes from "./pages/note/index";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Body from "./Body";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Notes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
