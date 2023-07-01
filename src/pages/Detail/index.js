import React, { useEffect, useState } from "react";
import { Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../components/config";
export default function Details( props ){

    const [produto_id, setProduto_id] = useState(props.route.params.produto_id);
    const [produto, setProduto] = useState([]);
    const [usuario_id, setUsuario_id] = useState('0qRBEeuugD5w2rKRhU8T');

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionImage}>
                <Image style={styles.image} source={{ uri: produto.imagem }}/>
            </View>

            <View style={styles.sectionProduto}>
                <Text style={styles.nomeProduto}>{ produto.nome }</Text>
                <Text style={styles.descricaoProduto}>{ produto.descricao }</Text>
                <Text style={styles.precoProduto}>{ produto.preco } R$</Text>
            </View>

            <View style={styles.sectionSale}>
                <TouchableOpacity style={styles.cartButton}>
                    <MaterialCommunityIcons name="cart" color={'#fff'} size={25} onPress={() => adicionarAoCarrinho()} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton} onPress={() => props.navigation.navigate('payment', {
                    produto_id: produto.id, 
                    usuario_id: usuario_id,
                    preco: produto.preco
                })}>
                    <Text style={styles.textButtomSale}>Comprar agora</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
