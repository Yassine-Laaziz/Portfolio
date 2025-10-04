import { lazy } from "react";
const EarthCanvas = lazy(() => import("./Earth"));
const CosmicBackground = lazy(() => import("./CosmicBackground"));

export { EarthCanvas, CosmicBackground };
