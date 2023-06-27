import react from "react";
import { SafeAreaView, Text, View, Image, ScrollView, Pressable } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg'
export default function Home( {navigation} ){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Olá, Francisco Mozar</Text>
            </View>

            <View style={styles.bodyProduct}>
                <Pressable style={styles.cardProduct} onPress={() => navigation.navigate('details')}>
                    <Image style={styles.cardImage} source={lapis}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardNameProduto}>Nome Produto</Text>
                        <View style={styles.sectionPreco}>
                            <Text style={styles.cardPrecoProduto}>1,00 R$</Text>
                            <Text style={styles.cardQuantProduto}>100 pcs</Text>
                        </View>
                    </View>
                </Pressable>{/* Card Produto */}
            </View>{/* Body Produtos */}
        </SafeAreaView>
    );
}