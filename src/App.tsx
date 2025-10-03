import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Suspense } from "react";
import Loading from "./components/Loading";

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
