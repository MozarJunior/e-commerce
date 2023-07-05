import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image, View, FlatList } from 'react-native';
import styles from './style';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { db } from "../../../components/config";
import { useIsFocused } from "@react-navigation/native";

export default function Payment( props ) {
    const isFocused = useIsFocused();
    const [produto, setProduto] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [endereco_id, setEndereco_id] = useState('')
    const [nome_produto, setNome_produto] = useState('');
    const [endereco_ex, setEndereco_ex] = useState();
    const [statePix, setStatePix] = useState(null);
    const [stateCard, setStateCard] = useState(null);
    const currentDateTime = new Date();
    const Data = currentDateTime.toLocaleDateString();
    const Hora = currentDateTime.toLocaleTimeString();
    const [produto_id, setProduto_id] = useState(props.route.params.produto_id)
    const [usuario_id, setUsuario_id] = useState(props.route.params.usuario_id)
    const [pagamento, setPagamento] = useState('');

    console.log(props.route.params.produto_id)

    const consultaProduto = async () => {
        await getDoc(doc(db, 'produto', produto_id)).then((docData) => {
            if(docData.exists){
                setProduto(docData.data());
            }
        }).catch(error => {
            console.error('produto não existe');
        });
    }

    const consultaEndereco = async () => {
        await getDocs(query(collection(db, 'endereco'), where('usuario_id', '==', usuario_id))).then((docSnap) => {
            docSnap.forEach((doc) => {
                setEndereco(doc.data());
                setEndereco_id(doc.id);
            })
        })
    }

    useEffect(() => {
        if(isFocused){
            console.log('A pagina foi recarregada');
            consultaProduto();
            consultaEndereco();
        }
    }, [isFocused]);

    useEffect(() => {
        if(produto.length == 0){
            consultaProduto();
            console.log("Pesquisando Produto")
        }else{
            setNome_produto(produto.nome)
            console.log(produto)
        }
    });

    useEffect(() => {
        if(endereco.length == 0){
            setEndereco_ex(false)
        }else{
            setEndereco_ex(true)
        }
    });
    
    useEffect(() => {
        if(endereco.length == 0){
            consultaEndereco();
            console.log("Consultando Endereco")
        }else{
            console.log(endereco_id)
        }
    })

    const selectedPix = async () => {
        setStatePix(true);
        setPagamento("pix")
        setStateCard(null)
    }
    const selectedCard = async () => {
        setStateCard(true);
        setPagamento("cartao")
        setStatePix(null)
    }

    async function cadastrarPedido(){ 
        addDoc(collection(db, 'pedidos'), {
            data_pedido: currentDateTime,
            endereco_id: endereco_id,
            produto_id: produto_id,
            status: "Aguardando Pagamento",
            tipo_pagamento: pagamento,
            usuario_id: usuario_id,
        }).then(() => {
            console.log('Cadastro realizado')
        }).catch(erro => console.error("não foi possivel cadastrar", erro))
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* <Text style={styles.title}>Produto</Text> */}
            <View style={[styles.secao, {
                height: '25%',
            }]}>
                <View style={styles.header}>
                    <Text style={styles.HeaderText}>Produto</Text>
                </View>
                <View style={styles.cardProduct}>
                    <Image style={styles.cardImage} source={{ uri: produto.imagem}}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardNameProduto}>{ nome_produto.length > 30 ? nome_produto.substring(0, 30).toUpperCase() + '...' : nome_produto.toUpperCase() }</Text> 
                        <View style={styles.sectionPreco}>
                            <Text style={styles.cardPrecoProduto}>{produto.preco} R$</Text>
                            <Text style={styles.cardQuantProduto}>Restam {produto.quantidade} pcs</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View style={styles.cardProduct}>
                <Image style={styles.cardImage} source={{ uri: produto.imagem}}/>
                <View style={styles.cardBody}>
                    <Text style={styles.cardNameProduto}>{ nome_produto.length > 30 ? nome_produto.substring(0, 30).toUpperCase() + '...' : nome_produto.toUpperCase() }</Text> 
                    <View style={styles.sectionPreco}>
                        <Text style={styles.cardPrecoProduto}>{produto.preco} R$</Text>
                        <Text style={styles.cardQuantProduto}>Restam {produto.quantidade} pcs</Text>
                    </View>
                </View>
            </View> */}

            <View style={[styles.secao, {
                height: '35%',
            }]}>
                <View style={styles.header}>
                    <Text style={styles.HeaderText}>Endereço de Entrega</Text>
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
                <View style={styles.Body}>
                    {endereco_ex == false? (
                        <Text style={styles.BodyText}>Sem endereço cadastrado - Adicione um endereço</Text>
                    ): 
                    (
                        <>
                            <Text style={styles.BodyText}>Rua: { endereco.logradouro }</Text>
                            <Text style={styles.BodyText}>Bairro: {endereco.bairro}   |   Numero: { endereco.numero }</Text>
                            <Text style={styles.BodyText}>Cidade: Terra Nova | Estado: PE</Text>
                        </>
                    )}
                </View>
            </View>
            
            <View style={[styles.secao, {
                height: '30%',
            }]}>
                <View style={styles.header}>
                    <Text style={styles.HeaderText}>Selecione o Metodo de Pagamento</Text>
                </View>
                <View style={styles.sectionPagamento}>
                    <TouchableOpacity  style={[styles.button, {
                        shadowColor: statePix == true? '#00aaff': '#000',
                        elevation: statePix == true?  10: 3
                    }]} onPress={ () => selectedPix()}>
                        <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {
                        shadowColor: stateCard == true? '#00aaff': '#000',
                        elevation: stateCard == true?  10: 3
                    }]} onPress={ () => selectedCard()}>
                        <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>

            </View>
            
            <View style={styles.sectionBtn}>
                <TouchableOpacity onPress={() => cadastrarPedido()} style={[styles.submitBtn, {
                    width: '90%',
                }]}>
                    <Text style={styles.submitBtnText}>Finalizar Pedido</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}