import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
