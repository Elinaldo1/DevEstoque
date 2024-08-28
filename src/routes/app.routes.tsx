import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryFormScreen from '@screens/app/Category/CategoryFormScreen';
import CategoryListScreen from '@screens/app/Category/CategoryListScreen';
import HomeScreen from '@screens/app/HomeScreen';
import ProductFormScreen from '@screens/app/Product/ProductFormScreen';
import ProductListScreen from '@screens/app/Product/ProductListScreen';


export type AppStackParamList = {

    Home: undefined;
    ProductList: undefined;
    ProductForm: {productId: number, product?: string} | undefined;
    CategoryList: undefined;
    CategoryForm: {categoryId: number, category?: string} | undefined;
}

export type AppScreenProps <RouteName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RouteName>

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export default function AppRoutes() {
 return (
   <Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false
    }}

   >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="ProductList" component={ProductListScreen} />
    <Screen
      name="ProductForm"
      component={ProductFormScreen}
      options={({route}) => ({
        title: route?.params?.productId ? "Edit Product" : "Add Product"
      })}

    />

    <Screen name="CategoryList" component={CategoryListScreen} />
    <Screen
      name="CategoryForm"
      component={CategoryFormScreen}
      options={({route}) => ({
        title: route?.params?.categoryId ? "Edit Category" : "Add Category"
      })}

    />

   </Navigator>
  );
}
