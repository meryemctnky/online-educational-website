import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(null);

  const setAuth = (data) => {
    setUser(data);

    localStorage.setItem("user", JSON.stringify(data));
    setIsAuth(true);

    navigate("home");
  };

  const userControl = () => {
    const userInfo = localStorage.getItem("user");

    if (userInfo) {
      const userInfoX = JSON.parse(userInfo);

      setUser(userInfoX);
      setIsAuth(true);
    } else {
      
      setIsAuth(false);
    }
  };

  const logout = () => {
    setUser({});
    setIsAuth(false);

    localStorage.removeItem("user");

    navigate("/");
  };

  useEffect(() => {
    userControl();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setAuth, isAuth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
