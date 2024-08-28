import { Header } from '@components/Header';
import { ProductListComponent } from '@components/Lists/Product/ProductListComponent';
import { useProducts } from '@hooks/useProducts';
import { AppScreenProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function ProductListScreen({ navigation }: AppScreenProps<'ProductList'>) {

    const { products } = useProducts();

    return (
        <View style = {styles.container} >
            <Header caption='PRODUTOS' />
            <ProductListComponent data={ products } />
            <View style = {styles.footer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductForm')}
                >
                   <Text>new prod</Text>
                    {/* <Icon name='plus-circle' size={55} color={theme.colors.text_on_brand_color}/> */}
                </TouchableOpacity>
            </View>
        </View>
      );
}