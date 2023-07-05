import React, { useEffect, useState } from "react";
import { Text, Image, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../components/config";
import { getAuth } from "firebase/auth";
export default function Details( props ){

    const [produto_id, setProduto_id] = useState(props.route.params.produto_id);
    const [produto, setProduto] = useState([]);
    const [usuario, setUsuario]  = useState([]);
    const [usuario_id, setUsuario_id] = useState('')
    const [user_id, setUser_id] = useState()

    async function adicionarAoCarrinho(){
        try {
            addDoc(collection(db, 'carrinho'), {
                usuario_id: usuario_id,
                produto_id: produto_id
            }).then(() => {
                console.log("Dados registrados");
            }).catch((error) => {
                console.log("algo deu errado");
            })
        } catch (error) {
            console.error("Item já adicionado")
        }
    }
    useEffect(() => {
        getDoc(doc(db, 'produto', produto_id)).then(docData => {
            let pro = []
            
            if(docData.exists()){
                pro = docData.data();
                setProduto(pro);
            }else{
                console.log('Não tem produto');
            }
        })
    }, [])

    const auth = async () => {
        const auth = getAuth();
        const user = auth.currentUser

        if(user) {
            const userUid = user.uid;
            setUser_id(userUid);
            console.log(user_id)
        }
    }

    const authUser = async () => {
        try {
            const tabela = collection(db, 'usuario');
            const q = query(tabela, where('user_id', '==', user_id));
            const snapShot = await getDocs(q);

            const user = []
            if(usuario.length < 1){
                snapShot.forEach((doc) => {
                    setUsuario(doc.data());
                    setUsuario_id(doc.id);
                })
            }
            console.log(usuario_id)
        } catch (error) {
            console.log("Erro ao consultar coleção: ", error)
        }
    }

    useEffect(() => {
        auth();
        authUser();
        console.log(usuario)
    });

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{uri: produto.imagem}}
                    style={styles.image}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{produto.nome}</Text>
                    <Text style={styles.price}>{produto.preco} R$</Text>
                    <Text style={styles.description}>
                        {produto.descricao}
                    </Text>
                    {/* Outros detalhes do produto */}
                </View>
            </ScrollView>
            <View style={styles.sectionSale}>
                <TouchableOpacity style={styles.cartButton}>
                    <MaterialCommunityIcons name="cart" color={'#fff'} size={25} onPress={() => adicionarAoCarrinho()} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton} onPress={() => props.navigation.navigate('payment', {
                    produto_id: produto_id, 
                    usuario_id: usuario_id,
                })}>
                    <Text style={styles.textButtomSale}>Comprar agora</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
