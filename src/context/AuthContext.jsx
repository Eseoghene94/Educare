import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const navigate = useNavigate();

  // Function to handle login
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
  const handleGoogleLogin = async (googleResponse) => {
    try {
      const { profileObj } = googleResponse;
      const mockUser = {
        email: profileObj.email,
        role: "user",
        name: profileObj.name,
        profilePic: profileObj.imageUrl,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      navigate("/profile");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  // Function to handle Facebook login
  const handleFacebookLogin = async (facebookResponse) => {
    try {
      const { email, name, picture } = facebookResponse;
      const mockUser = {
        email,
        role: "user",
        name,
        profilePic: picture.data.url,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      navigate("/profile");
    } catch (error) {
      console.error("Facebook Login Error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        handleGoogleLogin,
        handleFacebookLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
