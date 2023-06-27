import react from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";

export default function Perfil( {navigation} ){
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.headerTopText}>Meus Dados</Text>
                    <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Carrinho')}>
                        <MaterialCommunityIcons name="cart" color={'#fff'} size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerBody}>
                    <Text style={styles.headerBodyText}>Francisco Mozar</Text>
                    <Text style={styles.headerBodyText}>mozarjunior97@gmail.com</Text>
                </View>
            </View>

            <View style={styles.secaoEndereco}>
                <View style={styles.enderecoHeader}>
                    <Text style={styles.enderecoHeaderText}>Endereço de Entrega</Text>
                </View>
                <View style={styles.enderecoBody}>
                    <Text style={styles.enderecoBodyText}>Rua: Antônio joaquim Neto</Text>
                    <Text style={styles.enderecoBodyText}>Bairro: Centro   |   Numero: 01</Text>
                    <Text style={styles.enderecoBodyText}>Cep: 56190-000</Text>
                    <Text style={styles.enderecoBodyText}>Cidade: Terra Nova</Text>
                    <Text style={styles.enderecoBodyText}>Estado: Pernambuco</Text>
                </View>
            </View>

            <View style={styles.secaoDados}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pedidos')}>
                    <Text style={styles.textButton}>Meus Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Dados Pessoais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}