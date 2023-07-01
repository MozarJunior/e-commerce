import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from 'react-native';
import styles from "./style";

export default function Pedidos(){

    useEffect (() => {
        
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Meus Pedidos</Text>
            </View>

            <View style={styles.bodyProduct}>

            </View>

        </SafeAreaView>
    );
}