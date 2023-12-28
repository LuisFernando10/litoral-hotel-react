import { lazy } from "react";
import { pages } from "../constants";
import { RoutesType } from "../types";

const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Rooms = lazy(() => import("../pages/Rooms"));
const Contact = lazy(() => import("../pages/Contact"));

export const routes: RoutesType[] = [
  {
    path: pages.home,
    component: Home,
    exact: true,
  },
  {
    path: pages.aboutUs,
    component: AboutUs,
    exact: true,
  },
  {
    path: pages.rooms,
    component: Rooms,
    exact: true,
  },
  {
    path: pages.contact,
    component: Contact,
    exact: true,
  },
  {
    path: pages.notFound,
    component: Home,
  },
];
