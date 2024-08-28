import { Category } from '@entities/Category';
import { ListCategoriesService } from '@services/db/category/ListCategoryService';
import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCategories = async () => {
    try {
      const categories = await ListCategoriesService.execute();
      setCategories(categories);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, loading, error };
};

export { useCategories };
