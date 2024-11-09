import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./components/PrivateRoutes";
import SignIn from "./pages/auth/sign-in/SignIn";
import RootLayout from "./pages/root/RootLayout";
import DoctorsPage from "./pages/root/doctors/DoctorsPage";
import MainDashboardPage from "./pages/root/main-dashboard/MainDashboardPage";
import PatientsPage from "./pages/root/patients/PatientsPage";
import ServicesPage from "./pages/root/services/ServicesPage";

const App: React.FC = () => {
  return (
    <>
    <Routes>
      {/* AUTH Section*/}
      <Route path="/sign-in" element={<PrivateRoutes isAuthPage={true}><SignIn /></PrivateRoutes>} />

      {/* ROOT Section */}
      <Route path="/" element={<PrivateRoutes isAuthPage={false}><RootLayout /></PrivateRoutes>}>
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
