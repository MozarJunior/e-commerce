import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './style';

export default function PaymentCard() {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePayment = () => {
        // Lógica de processamento do pagamento
        console.log('Processando pagamento...');
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Pagamento por Cartão</Text>

            <View style={styles.form}>
                <View style={styles.formGroup}>
                <Text style={styles.label}>Número do Cartão</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
                </View>

                <View style={styles.formGroup}>
                <Text style={styles.label}>Data de Expiração</Text>
                <TextInput
                    style={styles.input}
                    placeholder="MM/AA"
                    value={expirationDate}
                    onChangeText={setExpirationDate}
                />
                </View>

                <View style={styles.formGroup}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                    style={styles.input}
                    placeholder="123"
                    value={cvv}
                    onChangeText={setCvv}
                />
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handlePayment}>
                <Text style={styles.submitBtnText}>Pagar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}