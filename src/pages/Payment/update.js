import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image, View, FlatList } from 'react-native';
import styles from './style';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { db } from "../../../components/config";
import { useIsFocused } from "@react-navigation/native";
import Pedidos from "../Pedidos";

export default function PaymentUpdate( props ) {
    const isFocused = useIsFocused();
    const [produto, setProduto] = useState([]);
    const [pedido, setPedido] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [endereco_id, setEndereco_id] = useState('')
    const [nome_produto, setNome_produto] = useState('');
    const [endereco_ex, setEndereco_ex] = useState();
    const [statePix, setStatePix] = useState(null);
    const [stateCard, setStateCard] = useState(null);
    const currentDateTime = new Date();
    const [produto_id, setProduto_id] = useState(props.route.params.produto_id)
    const [usuario_id, setUsuario_id] = useState(props.route.params.usuario_id)
    const [pagamento, setPagamento] = useState(props.route.params.pagamento);
    const [status, setStatus] = useState(props.route.params.status);

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

    const consultaPedido = async () => {
        try {
            await consultaProduto();
            const tabela = collection(db, 'pedidos');
            const q = query(tabela, where('usuario_id', '==', usuario_id), where('produto_id', '==', produto_id))
            const snapShot = await getDocs(q);
    
            const prod = []
            snapShot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            })

            setPedido(prod);
            // console.log(prod)
        } catch (error) {
            console.error("Erro ao consultar coleção pedidos: ", error)
        }
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
            console.log("Produto encontrado")
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
            // console.log(endereco_id)
            console.log('Endereco Encontrado')
        }
    })

    // useEffect(() => {
    //     if(pedido.length == 0){
    //         consultaPedido();
    //         console.log('pesquisando pedido')
    //     }else{
    //         console.log('Pedido pesquisado')
    //     }
    // })

    return (
        <SafeAreaView style={styles.container}>

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

            <View style={[styles.secao, {
                height: '35%',
            }]}>
                <View style={styles.header}>
                    <Text style={styles.HeaderText}>Endereço de Entrega</Text>
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
            { status == "Aguardando Pagamento"? (
                <View style={[styles.secao, {
                    height: '40%',
                }]}>
                    <View style={styles.header}>
                        <Text style={styles.HeaderText}>Efetuar Pagamento</Text>
                    </View>
                    <View style={styles.sectionPagamento}>
                        { pagamento == 'pix'? (
                            <TouchableOpacity  style={[styles.button, {
                                shadowColor: '#00aaff',
                                elevation: 10
                            }]} onPress={ () => props.navigation.navigate('paymentPix', {
                                usuario_id: usuario_id,
                                produto_id: produto_id,
                                preco: produto.preco
                            })}>
                                <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.button, {
                                shadowColor: '#00aaff',
                                elevation: 10
                            }]} onPress={ () => props.navigation.navigate('paymentCard', {
                                usuario_id: usuario_id,
                                produto_id: produto_id,
                                preco: produto.preco
                            })}>
                                <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
                            </TouchableOpacity>
                        ) }
                    </View>
                    
                </View>
            ) : (
                <View style={[styles.secao, {
                    height: '40%',
                }]}>
                    <View style={styles.header}>
                        <Text style={styles.HeaderText}>Pagamento Efetuado</Text>
                    </View>
                    <View style={[styles.sectionPagamento, {
                        height: '50%',
                    }]}>
                        { pagamento == 'pix'? (
                            <TouchableOpacity  style={[styles.button, {
                                shadowColor: '#00aaff',
                                elevation: 10
                            }]} >
                                <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.button, {
                                shadowColor: '#00aaff',
                                elevation: 10
                            }]} >
                                <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
                            </TouchableOpacity>
                        ) }
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.HeaderText}>Status: Produto {status}</Text>
                    </View>

                </View>
            )}
        </SafeAreaView>
    );
}