import { createContext , useState } from 'react';

const AuthContext = createContext();  // 로그인 인증 컨텍스트 생성

export const AuthProvider = ({ children }) => {   
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
