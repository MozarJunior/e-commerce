import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Pressable, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from "./style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { db } from "../../../components/config";
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useIsFocused } from "@react-navigation/native";

export default function Cart( props ){

    const isFocused = useIsFocused();
    
    const [produtos, setProdutos] = useState([]);
    const [produtos_cart, setProdutos_cart] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [usuario, setUsuario]  = useState([]);
    const [usuario_id, setUsuario_id] = useState('')
    const [user_id, setUser_id] = useState('')
    const consultaEs = async () => {
        try {
            await consultaUser();
            const tabela = collection(db, 'carrinho');
            const q = query(tabela, where('usuario_id', '==', usuario_id))
            const snapShot = await getDocs(q);
    
            const produtos = []
            snapShot.forEach((doc) => {
                produtos.push(doc.data().produto_id)
            })
    
            const tabelaPro = collection(db, 'produto');
            const snapShotPro = await getDocs(tabelaPro);
            const produto = []
            produtos.forEach((doc) => {
                // console.log(doc);
                snapShotPro.forEach((docPro) => {
                    if(doc === docPro.id){
                        produto.push({...docPro.data(), id: docPro.id})
                    }
                })
            })

            setProdutos(produto)
        } catch (error) {
            console.error('Erro ao verificar', error)
        }
    }


    useEffect(() => {
        if(isFocused){
            console.log('A pagina foi recarregada');
            consultaEs();
        }
    }, [isFocused]);

    useEffect(() => {
        if(produtos.length == 0){
            consultaEs();
            console.log("pesquisando produtos")
        }
    })

    const auth = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if(user) {
            const userUid = user.uid;
            setUser_id(userUid);
        }
    }

    const consultaUser = async () => {
        try {
            await auth();
            getDocs(query(collection(db, 'usuario'), where('user_id', '==', user_id))).then(docSnap => {
                docSnap.forEach(doc => {
                    setUsuario(doc.data());
                    setUsuario_id(doc.id)
                })
            })
        } catch (error) {
            console.log("Erro ao consultar coleção usuario: ", error)
        }
    }

    async function deleteCart(id) {
        console.log(id);
        deleteDoc(query(collection(db, 'carrinho'), where('produto_id', '==', toString(id)))).then(value => {
            console.log('Item deletado')
        }).catch(error => console.error('Não foi possivel deletar'));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Carrinho de Produtos</Text>
            </View>
            <View style={styles.bodyProduct}>
                <FlatList
                    style={styles.bodyFlat}
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={(item) => {
                        return (
                            <Pressable style={styles.cardProduct} onPress={() => props.navigation.navigate('details', {
                                produto_id: item.item.id
                            })}>
                                <Image style={styles.cardImage} source={{ uri: item.item.imagem }}/>
                                <View style={styles.cardBody}>
                                    <View style={styles.section01}>
                                        <Text style={styles.cardNameProduto}>{ item.item.nome.length > 20 ? item.item.nome.substring(0, 20).toUpperCase() + '...' : item.item.nome.toUpperCase() }</Text>
                                        <View style={styles.sectionPreco}>
                                            <Text style={styles.cardPrecoProduto}>{ item.item.preco } R$</Text>
                                            <Text style={styles.cardQuantProduto}>Restam {item.item.quantidade} pcs</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.cardAction} onPress={() => deleteCart(item.item.id)}>
                                        <AntDesign name="delete" color={'#fff'} size={20}/>
                                    </TouchableOpacity>
                                </View>
                                
                            </Pressable>
                        );
                    } }
                />
            </View>
        </SafeAreaView>
    );
}