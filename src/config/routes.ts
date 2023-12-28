import { lazy } from "react";
import { RouteType } from "../types";

const Home = lazy(() => import("../pages/Home"));

const routes: RouteType[] = [
  {
    isExact: true,
    component: Home,
    path: "/",
  },
];

export default routes;
