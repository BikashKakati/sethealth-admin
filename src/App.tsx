import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/sign-in/SignIn";
import RootLayout from "./pages/root/RootLayout";
import DoctorsPage from "./pages/root/doctors/DoctorsPage";
import MainDashboardPage from "./pages/root/main-dashboard/MainDashboardPage";
import PatientsPage from "./pages/root/patients/PatientsPage";
import ServicesPage from "./pages/root/services/ServicesPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar={false} />
    <Routes>
      {/* AUTH Section*/}
      <Route path="/sign-in" element={<SignIn />} />

      {/* ROOT Section */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainDashboardPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
