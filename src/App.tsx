import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Layout = lazy(() => import("./Layout"));
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
