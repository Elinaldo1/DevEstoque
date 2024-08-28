import { LoginUser } from '@interfaces/user/LoginUser';
import { AppStackParamList } from '@routes/app.routes';
import { AuthStackParamList } from '@routes/auth.routes';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface Props {
  children?: ReactNode
  // any props that come into the component
}

interface AuthContextData {
  isAuthenticated: boolean,
  user: {} | null,
  loading: boolean,
  login: boolean,
  logOut: boolean,
  signIn: (credentials: LoginUser) => Promise<void>,
  signOut(): Promise<void>

}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: Props) {

  const [user, setUser] = useState<{}>(null)
  const [loading, setLoading] = useState(false)
  const [login, setLogin] =  useState(false)
  const [logOut, setLogOut] =  useState(false)

  // const isAuthenticated = !!user
  const isAuthenticated = true


  async function signIn({register, password}: LoginUser){

    console.log('login', register, password)
    setLoading(false)
    setLogin(false)

  }

  async function signOut(){
    setLogOut(true)
    setLoading(true)
    setUser(null)
  }

  return(

    <AuthContext.Provider value ={{isAuthenticated, user, loading, login, logOut, signIn, signOut}} >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
