// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "@/pages/login";
import { DashboardPage } from "@/pages/DashboardPage";
// import { SidebarProvider } from "./components/ui/sidebar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    // <SidebarProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
    // </SidebarProvider>
  );
}

export default App;
