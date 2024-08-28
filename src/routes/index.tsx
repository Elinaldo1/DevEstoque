import { LoadingComponent } from '@components/Loading';
import { AuthContext } from '@contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import AppRoutes from './app.routes';
import { AuthRoutes } from './auth.routes';
export function Routes() {

    const  { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <LoadingComponent message="Logando..." />;
    }


    return (
        <NavigationContainer>

           {isAuthenticated ? <AppRoutes /> : <AuthRoutes/>}

        </NavigationContainer>
    )
}
