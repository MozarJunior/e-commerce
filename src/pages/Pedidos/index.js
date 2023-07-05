import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../components/config";
import { getAuth } from "firebase/auth";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-web";

export default function Pedidos(){
    const isFocused = useIsFocused();
    const [produtos, setProdutos] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [usuario, setUsuario]  = useState([]);
    const [usuario_id, setUsuario_id] = useState('')
    const [user_id, setUser_id] = useState('')

    const generalPedidos = async () => {
        await authUser();
        const ped = []
        getDocs(query(collection(db, 'pedidos'), where('usuario_id', '==', usuario_id))).then((docSnap) => {
            docSnap.forEach((doc) => {
                pedidos.push(doc.data().produto_id);
            })
        })

        pedidos.forEach((docSnap => {
            getDocs(collection(db, 'produto')).then(docSnapPro => {
                if(docSnap == docSnapPro.id){
                    produtos.push({...docSnapPro.data(), id: docSnapPro.id});
                }
            })
        }))

        // setPedidos(ped)
    }

    useEffect (() => {
        generalPedidos();
    }, []);

    // useEffect(() => {
    //     generalProdutos();
    // })

    useEffect(() => {
        if(isFocused){
            console.log('A pagina foi recarregada');
            generalPedidos();
        }
    }, [isFocused]);

    useEffect(() => {
        if(pedidos.length == 0){
            generalPedidos();
            console.log("pesquisando produtos")
        }else{
            console.log(pedidos);
        }
    }, [])
    // useEffect(() => {
    //     if(produtos.length == 0){
    //         generalProdutos();
    //         console.log("pesquisando produtos")
    //     }else{
    //         console.log(produtos);
    //     }
    // }, [])

    const auth = async () => {
        const auth = getAuth();
        const user = auth.currentUser

        if(user) {
            const userUid = user.uid;
            setUser_id(userUid);
        }
    }

    const authUser = async () => {
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
        authUser();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Meus Pedidos</Text>
            </View>
            <View style={styles.homeCard}>

                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon}>
                            <FontAwesome5 name="box" color={"#00aaff"} size={35}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Todos</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => writeProdutos()}>
                            <FontAwesome name="dollar" color={"#00aaff"} size={35}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Aguardando pagamento</Text>
                </View>
                
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>
                        <TouchableOpacity style={styles.cardIcon} onPress={() => bookProdutos()}>
                            <MaterialCommunityIcons name="truck" color={"#00aaff"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>A caminho</Text>
                </View>
                <View style={styles.sectionCategoria}>
                    <View style={styles.bodyCardIcon}>  
                        <TouchableOpacity style={styles.cardIcon} onPress={() => accessoryProdutos()}>
                            <MaterialCommunityIcons name="truck-check" color={"#00aaff"} size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCardIcon}>Entregue</Text>
                </View>
                
            </View>

            <View style={styles.bodyProduct}>

            </View>
            {/* <View style={styles.bodyProduct}>
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
            </View> */}

        </SafeAreaView>
    );
}