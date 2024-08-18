import React from "react";

const LandingPage = React.lazy(() => import("../../pages/landingPage/LandingPage"));

export const ROUTES = [
    {
        path: "/",
        element: <LandingPage />
    },
];

export default ROUTES;