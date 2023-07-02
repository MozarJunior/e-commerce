import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, ScrollView, Pressable, FlatList, TouchableOpacity } from 'react-native';
import styles from "./style";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import lapis from '../../assets/img/lapis.jpg'
import { db } from "../../../components/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
export default function Home( {navigation} ){

    const [produtos, setProdutos] = useState([]);
    const [usuario, setUsuario]  = useState([]);
    // const [imagem, setImagem] = useState();

    const generalProdutos = () => {
        getDocs(collection(db, 'produto')).then(docSnap => {
            let prod = [];
            docSnap.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id})
            })

            setProdutos(prod);
        });
    }

    const bookProdutos = async () => {
        try {
            const tabela = collection(db, 'produto');
            const q = query(tabela, where('categoria', '==', 'livro'))
            const snapShot = await getDocs(q);

            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setProdutos(prod);
        } catch (error) {
            console.log("Erro ao consultar coleção: ", error)
        }
    }

    const accessoryProdutos = async () => {
        try {
            const tabela = collection(db, 'produto');
            const q = query(tabela, where('categoria', '==', 'acessorio'))
            const snapShot = await getDocs(q);

            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setProdutos(prod);
        } catch (error) {
            console.log("Erro ao consultar coleção: ", error)
        }
    }

    const writeProdutos = async () => {
        try {
            const tabela = collection(db, 'produto');
            const q = query(tabela, where('categoria', '==', 'escrita'))
            const snapShot = await getDocs(q);

            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setProdutos(prod);
        } catch (error) {
            console.log("Erro ao consultar coleção: ", error)
        }
    }

    useEffect (() => {
        generalProdutos();
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

            <View style={styles.homeCard}>

                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => generalProdutos()}>
                            <AntDesign name="inbox" color={"#00ff00"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Geral</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => writeProdutos()}>
                            <EvilIcons name="pencil" color={"#00ff00"} size={50}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Escrita</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => bookProdutos()}>
                            <AntDesign name="book" color={"#00ff00"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Livros</Text>
                </View>
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>  
                        <TouchableOpacity style={styles.cardIcon} onPress={() => accessoryProdutos()}>
                            <SimpleLineIcons name="briefcase" color={"#00ff00"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Acessórios</Text>
                </View>
                
            </View>
            
            <View style={styles.bodyProduct}>
                <FlatList
                    style={styles.bodyFlat}
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={( item ) => {
                        // const imagem = require(item.item.imagem);
                        // console.log(imagem)
                        return (
                        <Pressable style={styles.cardProduct} onPress={() => navigation.navigate('details', {
                            produto_id: item.item.id
                        })}>
                            <Image style={styles.cardImage} source={{ uri: item.item.imagem}}/>
                            <View style={styles.cardBody}>
                                <Text style={styles.cardNameProduto}>{ item.item.nome.length > 30 ? item.item.nome.substring(0, 30).toUpperCase() + '...' : item.item.nome.toUpperCase() }</Text>
                                <View style={styles.sectionPreco}>
                                    <Text style={styles.cardPrecoProduto}>{item.item.preco} R$</Text>
                                    <Text style={styles.cardQuantProduto}>Restam {item.item.quantidade} pcs</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}}
                />
            </View>
        </SafeAreaView>
    );
}