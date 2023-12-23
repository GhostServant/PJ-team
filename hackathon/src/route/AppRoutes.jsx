import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./../components/layout/Layout";
const Main = lazy(() => import("./../pages/Main"));
const About = lazy(() => import("./../pages/About"));
const Registration = lazy(() => import("./../pages/Registration"));
const Auth = lazy(() => import("./../pages/Auth"));
const Events = lazy(() => import("./../pages/Event"));
const Calendar = lazy(() => import("./../pages/Calendar"));
const Profile = lazy(() => import("./../pages/ProfilePage"));
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
