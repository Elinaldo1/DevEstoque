import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Product } from "@entities/Product";
import { ProductComponent } from "../ProductComponent";

function ProductListComponent({data}: {data: Product[]} ) {

    return(
        <>
            <FlatList
                contentContainerStyle = {styles.container}
                data={data}
                renderItem={({item}) => <ProductComponent product={item} />}
                ListEmptyComponent={()=>(
                    <View style = {styles.emptyComponent} >
                        <Text style = { styles.textEmptyComponent } >
                          Não há produtos cadastrados!
                        </Text>
                    </View>
                )}
            />
        </>
    )
}

export { ProductListComponent }