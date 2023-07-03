import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from "./style";
import { db } from "../../../components/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export default function Perfil( {navigation} ){
    const [usuario_id, setUsuario_id] = useState('0qRBEeuugD5w2rKRhU8T');
    const [usuario, setUsuario] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [endereco_ex, setEndereco_ex] = useState();

    const consulta = async () => {
        try{
            const tabelaRef = collection(db, 'endereco');
            const q = query(tabelaRef, where('usuario_id', '==', usuario_id));

            // Execute a consulta
            const snapshot = await getDocs(q);
    
            snapshot.forEach((doc) => {
                setEndereco(doc.data());
            })
        }catch(error){
            console.error('Erro ao consultar coleção: ', error)
        }
    }

    useEffect(() => {
        consulta();
    }, []);

    useEffect(() => {
        getDoc(doc(db, 'user', usuario_id)).then(docData => {
            let user = []
            
            if(docData.exists()){
                user = docData.data();
                setUsuario(user);
            }else{
                console.log('Não tem usuario');
            }
        })
    }, []);

    useEffect(() => {
        if(endereco.length == 0){
            setEndereco_ex(false)
        }else{
            setEndereco_ex(true)
        }
    })

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
                    <Text style={styles.headerBodyText}>{usuario.nome}</Text>
                    <Text style={styles.headerBodyText}>{usuario.email}</Text>
                </View>
            </View>

            <View style={styles.secaoEndereco}>
                <View style={styles.enderecoHeader}>
                    <Text style={styles.enderecoHeaderText}>Endereço de Entrega</Text>
                    {endereco_ex == false? (
                        <TouchableOpacity onPress={() => {navigation.navigate('registerEndereco', {
                            usuario_id: usuario_id
                        })}}>
                            <Ionicons name="add-circle-outline" size={35} color={'#00aaff'}/> 
                        </TouchableOpacity>
                        ): 
                        (
                            <TouchableOpacity onPress={() => {navigation.navigate('updateEndereco', {
                                usuario_id: usuario_id
                            })}}>
                                <Feather name="edit" size={30} color={'#00aaff'}/>
                            </TouchableOpacity>
                        )}
                    
                </View>
                <View style={styles.enderecoBody}>
                    {endereco_ex == false? (
                        <Text style={styles.enderecoBodyText}>Sem endereço cadastrado - Adicione um endereço</Text>
                    ): 
                    (
                        <>
                            <Text style={styles.enderecoBodyText}>Rua: { endereco.logradouro }</Text>
                            <Text style={styles.enderecoBodyText}>Bairro: {endereco.bairro}   |   Numero: { endereco.numero }</Text>
                            <Text style={styles.enderecoBodyText}>Cidade: Terra Nova | Estado: PE</Text>
                        </>
                    )}
                </View>
            </View>

            <View style={styles.secaoDados}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pedidos')}>
                    <Text style={styles.textButton}>Meus Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('registerUpdate', {
                    usuario_id: usuario_id,
                })}>
                    <Text style={styles.textButton}>Dados Pessoais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}