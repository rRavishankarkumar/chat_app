import { createContext } from "react";


export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthcontext = () => {
  return useCoontext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

  return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</Authontext.Provider>;
};