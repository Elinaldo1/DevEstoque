import { connectDb } from '@database/configs/connectDb';
import { useEffect } from 'react';

const useInitializeDatabase = () => {
  useEffect(() => {
    const initializeDatabase = async () => {
      await connectDb();
    };

    initializeDatabase();
  }, []);
};

export { useInitializeDatabase };
