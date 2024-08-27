import { connectDb } from '@database/configs/connectDb';
import { Product } from '@entities/Product';
import { ListProductsService } from '@services/db/product/ListProductsService';
import { SeedDatabaseService } from '@services/db/seeders/SeedDatabaseService';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [products, setProducts] = useState<Product[]>(null)

  useEffect(() => {
    const initializeDatabase = async () => {
      await connectDb();
    };

    initializeDatabase();
  }, []);

  const getProducts = async() => {
    try {
      const products = await ListProductsService.execute();
      setProducts(products);
    } catch (error) {
      console.log('Error fetching products: ', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Dev Estoque Sujeito Pro</Text>
      <Button 
        title='Populate Tables'  
        onPress={async() => { 
          await SeedDatabaseService.execute();
          await getProducts();
        }} 
      />
      <StatusBar style="auto" />
      <ScrollView>
        {
          products && products.map((product) => (
            <View key={product.id} style = { styles.card }>
              <Text>Product: {product.name}</Text>
              <Text>Description: {product.description}</Text>
              <Text>Category: {product.category.name}</Text>
              <Text>Unit: {product.unit.code}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1
  }
});
