import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { pages } from "./constants";
import Home from "./pages/Home";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={pages.home} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
