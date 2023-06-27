import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import styles from "./style";

export default function Pedidos(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderText}>Meus Pedidos</Text>
            </View>

            

        </SafeAreaView>
    );
}