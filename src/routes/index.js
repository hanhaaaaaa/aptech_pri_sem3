import React from "react";
import Loadable from "react-loadable";

function Loading() {
  return <div className="vnt-loading"></div>;
}

// COMMON
const AsyncView = Loadable({
  loader: () => import("../components/view"),
  loading: Loading,
});

export const appRoutes = [
  {
    path: "/",
    name: "view",
    exact: true,
    component: AsyncView,
  },
];
