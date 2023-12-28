import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, idx) => (
          <Route path={route.path} Component={route.component} key={idx} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
