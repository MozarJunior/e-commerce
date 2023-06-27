import React from "react";
import { Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Details( {navigation} ){

    async function adicionarAoCarrinho(){
        alert('Adicionando item ao carrinho');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionImage}>
                <Image style={styles.image} source={lapis}/>
            </View>

            <View style={styles.sectionProduto}>
                <Text style={styles.nomeProduto}>Nome do produto do exemplo clicado</Text>
                <Text style={styles.descricaoProduto}>Aqui está a dsscrição do produto que está sendo apresentado</Text>
                <Text style={styles.precoProduto}>1.00 R$</Text>
            </View>

            <View style={styles.sectionSale}>
                <TouchableOpacity style={styles.cartButton}>
                    <MaterialCommunityIcons name="cart" color={'#fff'} size={25} onPress={() => adicionarAoCarrinho()} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('sale')}>
                    <Text style={styles.textButtomSale}>Comprar agora</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
