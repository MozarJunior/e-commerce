import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './style';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../components/config";

export default function Payment( props ) {

    const [produto, setProduto] = useState([]);
    const [produto_id, setProduto_id] = useState('CaehtUZFyGisNeNqhU9e')
    const [usuario_id, setUsuario_id] = useState('NBzQhvLcgpBO9UVoufip')
    useEffect(() => {
        getDoc(doc(db, 'produto', produto_id)).then((docData) => {
            if(docData.exists){
                setProduto(docData.data());
                console.log(produto);
            }
        }).catch(error => {
            console.error('produto não existe');
        });
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Produto</Text>
            <View style={styles.cardProduct}>
                <Image style={styles.cardImage} source={{ uri: produto.imagem}}/>
                <View style={styles.cardBody}>
                    <Text style={styles.cardNameProduto}>{ produto.nome.length > 30 ? produto.nome.substring(0, 30).toUpperCase() + '...' : produto.nome.toUpperCase() }</Text> 
                    <View style={styles.sectionPreco}>
                        <Text style={styles.cardPrecoProduto}>{produto.preco} R$</Text>
                        <Text style={styles.cardQuantProduto}>Restam {produto.quantidade} pcs</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Metodo de Pagamento</Text>
            <View style={styles.sectionPagamento}>
                <TouchableOpacity  style={styles.button} onPress={ () => {props.navigation.navigate('paymentPix', {
                    // produto_id : props.route.params.produto_id,
                    // usuario_id: props.route.params.usuario_id,
                    // preco: props.route.params.preco
                    } 
                )}}>
                    <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate('paymentCard')}}>
                    <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    );
}