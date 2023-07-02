import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Pressable, Image, FlatList } from 'react-native';
import styles from "./style";
import lapis from '../../assets/img/lapis.jpg';
import { db } from "../../../components/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
// import consulta from "./consulta";
// import consultaEs from "./consulta";
export default function Cart( props ){

    const [produtos, setProdutos] = useState([]);
    const [produtos_cart, setProdutos_cart] = useState([]);

    const [carrinho, setCarrinho] = useState([]);
    const [usuario_id, setUsuario] = useState('0qRBEeuugD5w2rKRhU8T');
    const [count, setCount] = useState(0);

    const consultaEs = async () => {
        try {
            const tabela = collection(db, 'carrinho');
            const q = query(tabela, where('usuario_id', '==', '0qRBEeuugD5w2rKRhU8T'))
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
        consultaEs();
    }, [])

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
                    renderItem={ (item) => {
                        return (
                            <Pressable style={styles.cardProduct} onPress={() => props.navigation.navigate('details', {
                                produto_id: item.item.id
                            })}>
                                <Image style={styles.cardImage} source={{ uri: item.item.imagem }}/>
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardNameProduto}>{ item.item.nome.length > 30 ? item.item.nome.substring(0, 30).toUpperCase() + '...' : item.item.nome.toUpperCase() }</Text>
                                    <View style={styles.sectionPreco}>
                                        <Text style={styles.cardPrecoProduto}>{ item.item.preco } R$</Text>
                                        <Text style={styles.cardQuantProduto}>Restam {item.item.quantidade} pcs</Text>
                                    </View>
                                </View>
                            </Pressable>
                        );
                    } }
                />
            </View>
        </SafeAreaView>
    );
}