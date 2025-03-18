import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface User {
  name: string;
  profilePic?: string;
}

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }) {
  const { user: authUser } = useAuth(); // Get user data from AuthContext
  const [user, setUser] = useState<User | null>(null);

  // Update UserContext when AuthContext changes
  useEffect(() => {
    if (authUser) {
      setUser({
        name: authUser.name || "Guest",
        profilePic: authUser.profilePic,
      });
    } else {
      setUser(null);
    }
  }, [authUser]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
