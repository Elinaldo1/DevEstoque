import { Product } from '@entities/Product';
import { useNavigation } from '@react-navigation/native';
import { AppScreenProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

function ProductComponent({product}: {product: Product }) {

    const navigation = useNavigation<AppScreenProps<'ProductForm'>['navigation']>();

    const date = new Date(product.created_at)
    return  (
        <TouchableOpacity
            style = {styles.button}
            onPress={() => navigation.navigate('ProductForm', {
                productId: product?.id, product: JSON.stringify(product)
            })}
        >
            <Text style = {styles.text} >{String(date)}</Text>
            <Text style = {styles.text} >PRODUTO: {product?.name}</Text>
            <Text style = {styles.text} >QTD: {product?.quantity.toFixed(2)} {product?.unit?.code}</Text>
            <Text style = {styles.text} >CATEGORIA: {product?.category?.name}</Text>
            <Text style = {styles.text} >DESCRIÇÃO: {String(product?.description)}</Text>
        </TouchableOpacity>
    )

}

export { ProductComponent }