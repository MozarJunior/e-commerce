import React from "react";
import { SafeAreaView, TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './style';

export default function Payment( props ) {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Metodo de Pagamento</Text>
            
            <TouchableOpacity  style={styles.button} onPress={ () => {props.navigation.navigate('paymentPix', {
                produto_id : props.route.params.produto_id,
                usuario_id: props.route.params.usuario_id,
                preco: props.route.params.preco
                } 
            )}}>
                <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate('paymentCard')}}>
                <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}