import { Product } from '@entities/Product';
import { AppScreenProps } from '@routes/app.routes';
import { ListProductsService } from '@services/db/product/ListProductsService';
import { SeedDatabaseService } from '@services/db/seeders/SeedDatabaseService';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: AppScreenProps<'Home'>) {

  const [products, setProducts] = useState<Product[]>(null)

  const getProducts = async() => {
    try {
      const products = await ListProductsService.execute();
      setProducts(products);
    } catch (error) {
      console.log('Error fetching products: ', error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

 return (
  <View style={styles.container}>
    <Text>Dev Estoque Sujeito Pro</Text>
    <Button 
      title='Populate Tables'  
      onPress={async() => { 
        await SeedDatabaseService.execute();
      }} 
    />
    <Button 
      title='To List Products'  
      onPress={async() => { 
        navigation.navigate('ProductList');
      }} 
    />
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