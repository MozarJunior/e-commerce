import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

export default function PaymentPix() {
    // Lógica de processamento do pagamento por PIX
    const handlePayment = () => {
        console.log('Processando pagamento por PIX...');
    };
    const [pixKey, setPixKey] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagamento por PIX</Text>

            <View style={styles.form}>
                <View style={styles.formGroup}>
                <Text style={styles.label}>Chave PIX</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua chave PIX"
                    value={pixKey}
                    onChangeText={setPixKey}
                />
                </View>

                <View style={styles.formGroup}>
                <Text style={styles.label}>Valor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor do pagamento"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handlePayment}>
                <Text style={styles.submitBtnText}>Pagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};