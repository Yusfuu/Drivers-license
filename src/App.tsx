import { Thankyou } from "./pages/thankyou";
import Final from "./pages/Final";
import { Routes, Route, useLocation } from "react-router-dom";
import { Quiz } from "./pages/Quiz";
import { Landing } from "./pages/Landing";
import { Dashboard, Chart, LoginAdmin, Users } from "./pages";
import { IndexDashboard } from "./components/Dashboard/IndexDashboard";

const App = () => {
  const { pathname } = useLocation();

  const path = pathname.replace("/index", "") || "/";

  return (
    <Routes location={path}>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Dashboard />}>
        <Route index element={<IndexDashboard />} />
        <Route path="login" element={<LoginAdmin />} />
        <Route path="home" element={<IndexDashboard />} />
        <Route path="charts" element={<Chart />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="submit" element={<Final />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
};

export default App;
