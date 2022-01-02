import React from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Navbar from "../components/Navbar/Navbar";

function NotFound() {
  return (
    <main>
      <Navbar />
      <ErrorPage />
    </main>
  );
}

export default NotFound;
