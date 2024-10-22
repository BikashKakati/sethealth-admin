import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/sign-in/SignIn";
import RootLayout from "./pages/root/RootLayout";
import MainDashboard from "./pages/root/main-dashboard/MainDashboard";

const App: React.FC = () => {
  return (
    <Routes>
      {/* AUTH Section*/}
      <Route path="/sign-in" element={<SignIn />} />

      {/* ROOT Section */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
