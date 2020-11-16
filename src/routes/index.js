import React from "react";
import Loadable from "react-loadable";

function Loading() {
  return <div className="vnt-loading"></div>;
}

// COMMON
const AsyncHomePage = Loadable({
  loader: () => import("../components/homepage"),
  loading: Loading,
});

const AsyncSurvey = Loadable({
  loader: () => import("../components/survey"),
  loading: Loading,
});

export const appRoutes = [
  {
    path: "/",
    name: "homePage",
    exact: true,
    component: AsyncHomePage,
  },
  {
    path: "/survey",
    name: "survey",
    exact: true,
    component: AsyncSurvey,
  },
];
