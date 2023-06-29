import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, ScrollView, Pressable, FlatList } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg'
import { db, database } from "../../../components/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
export default function Home( {navigation} ){

    const [produtos, setProdutos] = useState([]);
    const [usuario, setUsuario]  = useState([]);

    useEffect (() => {
        getDocs(collection(db, 'produto')).then(docSnap => {
            let prod = [];
            docSnap.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id})
            })

            setProdutos(prod);
        });
    }, []);

    useEffect(() => {
        getDoc(doc(db, 'user', '0qRBEeuugD5w2rKRhU8T')).then(docData => {
            let user = []
            
            if(docData.exists()){
                user = docData.data();
                setUsuario(user);
            }else{
                console.log('Não tem usuario');
            }
        })
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Olá, { usuario.nome }</Text>
            </View >
            
            <View style={styles.bodyProduct}>
                <FlatList
                    style={styles.bodyFlat}
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={( item ) => {
                        return (
                        <Pressable style={styles.cardProduct} onPress={() => navigation.navigate('details', {
                            produto_id: item.item.id
                        })}>
                            <Image style={styles.cardImage} source={lapis}/>
                            <View style={styles.cardBody}>
                                <Text style={styles.cardNameProduto}>{ item.item.nome }</Text>
                                <View style={styles.sectionPreco}>
                                    <Text style={styles.cardPrecoProduto}>{item.item.preco} R$</Text>
                                    <Text style={styles.cardQuantProduto}>{item.item.quantidade} pcs</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}}
                />
            </View>
        </SafeAreaView>
    );
}