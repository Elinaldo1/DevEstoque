import { AuthProvider } from '@contexts/auth';
import { useInitializeDatabase } from '@hooks/useInitializeDb';
import { Routes } from '@routes/index';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  useInitializeDatabase();

  return (
    <AuthProvider>
      <StatusBar style='auto' />
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
    </AuthProvider>
  );
}


