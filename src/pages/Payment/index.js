import React from "react";
import { SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';

export default function Payment( props ) {
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate('paymentPix')}}>
                <Image source={require('../../assets/img/logo_pix.png')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate('paymentCard')}}>
                <Image source={require('../../assets/img/logo_cartao.png')} style={styles.image} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}