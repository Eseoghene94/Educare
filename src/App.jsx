import "./App.css";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import TeacherSignup from "./pages/TeacherSignup";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/TeacherSignup" element={<TeacherSignup />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
