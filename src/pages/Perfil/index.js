import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
import { db } from "../../../components/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default function Perfil( {navigation} ){
    const [usuario_id, setUsuario] = useState('0qRBEeuugD5w2rKRhU8T');
    const [endereco, setEndereco] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'endereco')).then(docSnap => {
            ender = []
            docSnap.forEach((doc) => {
                if(doc.data().usuario_id === usuario_id){
                    endereco.push({...doc.data(), id: doc.id})
                }
            })
        });
    }, [])

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
                    <Text style={styles.enderecoBodyText}>Rua: { endereco.logradouro }</Text>
                    <Text style={styles.enderecoBodyText}>Bairro: {endereco.bairro}   |   Numero: { endereco.numero }</Text>
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