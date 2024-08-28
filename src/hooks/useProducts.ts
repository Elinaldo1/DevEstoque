import { Product } from '@entities/Product';
import { ListProductsService } from '@services/db/product/ListProductsService';
import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    try {
      const products = await ListProductsService.execute();
      setProducts(products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error };
};

export { useProducts };