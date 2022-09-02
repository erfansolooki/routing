import { useContext, useEffect, useState, createContext } from "react";

const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "userToken";

const AuthProvider = ({ children }) => {
  const [state, setState] = useState("");
  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || "";
    setState(userData);
  }, []);

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
