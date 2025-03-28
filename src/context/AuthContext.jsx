import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const navigate = useNavigate();

  // Function to handle login with email/password
  const login = async (email, password) => {
    try {
      // Hardcoded credentials for testing
      const testEmail = "user@educare.com";
      const testPassword = "User123";

      if (email === testEmail && password === testPassword) {
        const mockUser = {
          email,
          role: "user",
          name: "Gloria",
          profilePic:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
        };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        navigate("/profile");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/signin");
  };

  // Function to handle Google login
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      const mockUser = {
        email: decodedToken.email,
        role: "user",
        name: decodedToken.name,
        profilePic: decodedToken.picture,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      navigate("/profile");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="136416221464-dhtjpqu7nnnoup59hm7cinlekcs1340a.apps.googleusercontent.com">
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
          handleGoogleLogin,
        }}
      >
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
