import React, { createContext, useCallback } from "react";

import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email: email,
      password: password,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ name: "a", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
