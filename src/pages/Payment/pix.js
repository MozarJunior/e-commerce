import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Clipboard } from 'react-native-clipboard';
import styles from './style';
import chave from '../../assets/img/chave_pix.jpg'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../components/config';
export default function PaymentPix( props ) {
    const [usuario_id, setUsuario_id] = useState(props.route.params.usuario_id);
    const [produto_id, setProduto_id] = useState(props.route.params.produto_id);
    const [preco, setPreco] = useState(props.route.params.preco)

    // const handleCopyToClipboard = () => {
    //     const texto = '00020126360014br.gov.bcb.pix0114+558799105067352040000530398654041.005802BR5925FRANCISCO MOZAR RODRIGUES6009Sao Paulo62070503***63044DF2';
    //     Clipboard.setString(texto);
    // };


    return (
        <ScrollView style={styles.containerPix}>
            <Text style={styles.title}>Pagamento por PIX</Text>

            <Image style={styles.imagem} source={chave}/>

            <View style={styles.form}>
                <View style={styles.formGroup}>
                <Text style={styles.label}>Chave PIX</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText='00020126360014br.gov.bcb.pix0114+558799105067352040000530398654041.005802BR5925FRANCISCO MOZAR RODRIGUES6009Sao Paulo62070503***63044DF2'
                    value='00020126360014br.gov.bcb.pix0114+558799105067352040000530398654041.005802BR5925FRANCISCO MOZAR RODRIGUES6009Sao Paulo62070503***63044DF2'
                    editable={false}
                    selectionState={true}
                    selectTextOnFocus={true}
                />
                </View>

                <View style={styles.formGroup}>
                <Text style={styles.label}>Valor</Text>
                <TextInput
                    style={styles.input}
                    placeholder={preco}
                    // value={amount}
                    // onChangeText={setAmount}
                    value={props.route.params.preco}
                    editable={false}
                    keyboardType="numeric"
                />
                </View>

                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Copiar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};