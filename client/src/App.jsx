import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgot from "../pages/Forgot";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AnalyzeMessage from "../pages/AnalyzeMessage";
import History from "../pages/History";
import LearnAboutSection from "../pages/LearnAboutSection";
import SavedReports from "../pages/SavedReports";
import Settings from "../pages/Settings";
import ScamDetailsPage from "../components/Learn about Section/ScamDetailsPage";
const App = () => {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/forgot-password" element={<Forgot />} />

  <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/analyze-message" element={<AnalyzeMessage />} />
    <Route path="/history" element={<History />} />
    <Route path="/learnAbout" element={<LearnAboutSection />} /> 
    <Route path="/learn/:category" element={<ScamDetailsPage />} />
    <Route path="/Saved-report" element={<SavedReports />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
</Routes>
    </BrowserRouter>
  );
};

export default App;