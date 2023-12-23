import { Suspense } from "react";
import "./App.scss";
import AppRoutes from "./route/AppRoutes";
import Loader from "./ui/loader/Loader";
function App() {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

export default App;
