import React from "react";

export type RouteType = {
  isExact: boolean;
  component: React.FC;
  path: string;
};
