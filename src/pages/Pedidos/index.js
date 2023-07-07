import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, Pressable, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../components/config";
import { getAuth } from "firebase/auth";
import { useIsFocused } from "@react-navigation/native";

export default function Pedidos( props ){
    const isFocused = useIsFocused();
    const [produtos, setProdutos] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [usuario, setUsuario]  = useState([]);
    const [usuario_id, setUsuario_id] = useState('')
    const [user_id, setUser_id] = useState('')

    const generalPedidos = async () => {
        try {
            await consultaUser();
            const tabela = collection(db, 'pedidos');
            const q = query(tabela, where('usuario_id', '==', usuario_id))
            const snapShot = await getDocs(q);
    
            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setPedidos(prod)
            const tabelaPro = collection(db, 'produto');
            const snapShotPro = await getDocs(tabelaPro);
            const produto = []
            prod.forEach((doc) => {
                // console.log(doc);
                snapShotPro.forEach((docPro) => {
                    if(doc.produto_id === docPro.id){
                        produto.push({...docPro.data(), id: docPro.id, status: doc.status, pagamento: doc.tipo_pagamento})
                    }
                })
            })

            setProdutos(produto)
        } catch (error) {
            console.error("Erro ao consultar coleção pedidos: ", error)
        }
    }

    const categoriaPedidos = async (categoria) => {
        try {
            await consultaUser();
            const tabela = collection(db, 'pedidos');
            const q = query(tabela, where('usuario_id', '==', usuario_id), where('status', '==', categoria))
            const snapShot = await getDocs(q);
    
            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setPedidos(prod)
            const tabelaPro = collection(db, 'produto');
            const snapShotPro = await getDocs(tabelaPro);
            const produto = []
            prod.forEach((doc) => {
                // console.log(doc);
                snapShotPro.forEach((docPro) => {
                    if(doc.produto_id === docPro.id){
                        produto.push({...docPro.data(), id: docPro.id, status: doc.status, pagamento: doc.tipo_pagamento})
                    }
                })
            })

            setProdutos(produto)
        } catch (error) {
            console.error("Erro ao consultar coleção categoria: ", error)
        }
    }

    useEffect (() => {
        generalPedidos();
    }, []);

    useEffect(() => {
        if(isFocused){
            console.log('A pagina foi recarregada');
            generalPedidos();
        }
    }, [isFocused]);
    
    useEffect(() => {
        if(produtos.length == 0){
            generalPedidos();
            console.log("pesquisando produtos")
        }else{
            console.log(pedidos);
        }
    })

    useEffect(() => {
        console.log(produtos)
    })

    const auth = async () => {
        const auth = getAuth();
        const user = auth.currentUser

        if(user) {
            const userUid = user.uid;
            setUser_id(userUid);
        }
    }

    const consultaUser = async () => {
        try {
            await auth();
            const tabela = collection(db, 'usuario');
            const q = query(tabela, where('user_id', '==', user_id))
            const snapShot = await getDocs(q);

            const user = []
            if(usuario.length < 1){
                snapShot.forEach((doc) => {
                    setUsuario(doc.data());
                    setUsuario_id(doc.id);
                })
            }
        } catch (error) {
            console.log("Erro ao consultar coleção usuario: ", error)
        }
    }

    useEffect(() => {
        auth();
        consultaUser();
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Meus Pedidos</Text>
            </View>
            <View style={styles.homeCard}>

                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => generalPedidos()}>
                            <FontAwesome5 name="box" color={"#00aaff"} size={35}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Todos</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => categoriaPedidos("Aguardando Pagamento")}>
                            <FontAwesome name="dollar" color={"#00aaff"} size={35}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Pagamento</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => categoriaPedidos("A caminho")}>
                            <MaterialCommunityIcons name="truck" color={"#00aaff"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>A caminho</Text>
                </View>
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>  
                        <TouchableOpacity style={styles.cardIcon} onPress={() => categoriaPedidos("Entregue")}>
                            <MaterialCommunityIcons name="truck-check" color={"#00aaff"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Entregue</Text>
                </View>
                
            </View>

            <View style={styles.bodyProduct}>
                <FlatList
                    style={styles.bodyFlat}
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={(item) => {
                        return (
                            <Pressable style={styles.cardProduct} onPress={() => props.navigation.navigate('paymentUpdate', {
                                produto_id: item.item.id, 
                                usuario_id: usuario_id,
                                pagamento: item.item.pagamento,
                                status: item.item.status,
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
                                    { item.item.status == "Aguardando Pagamento"? (
                                        <TouchableOpacity style={[styles.cardAction, {
                                            padding: 12,
                                        }]} onPress={() => {
                                            item.item.pagamento == 'pix'? (props.navigation.navigate('paymentPix', {
                                                usuario_id: usuario_id,
                                                produto_id: item.item.id,
                                                preco: item.item.preco
                                            })) : (props.navigation.navigate('paymentCard', {
                                                usuario_id: usuario_id,
                                                produto_id: item.item.id
                                            }))
                                        }}>
                                            <FontAwesome name="dollar" color={"#fff"} size={20}/>
                                        </TouchableOpacity>
                                    ) : item.item.status == "A caminho"?  (
                                        <TouchableOpacity style={[styles.cardAction, {
                                            backgroundColor: '#00aaff',
                                        }]}>
                                            <MaterialCommunityIcons name="truck" color={"#fff"} size={20}/>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity style={[styles.cardAction, {
                                            backgroundColor: '#52c41a',
                                        }]}>
                                            <MaterialCommunityIcons name="truck-check" color={"#fff"} size={20}/>
                                        </TouchableOpacity>
                                    )}
                                    
                                </View>
                                
                            </Pressable>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}