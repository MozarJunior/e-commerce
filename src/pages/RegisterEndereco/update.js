import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, View, ScrollView } from 'react-native';
import styles from './style';
import { addDoc, collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../../../components/config';
//Imports para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useIsFocused } from '@react-navigation/native';

const schema = yup.object({
    logradouro: yup.string().required("Informe sua rua"),
    bairro: yup.string().required('Informe seu Bairro'),
    numero: yup.string().required('Informe o número da sua casa')
})

export default function UpdateEndereco( props ){

    const isFocused = useIsFocused();

    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    const [usuario_id, setUsuario_id] = useState(props.route.params.usuario_id)
    const [endereco, setEndereco] = useState([]);

    const onSubmit = data => console.log(data);

    const consulta = async () => {
        try{
            const tabelaRef = collection(db, 'endereco');
            const q = query(tabelaRef, where('usuario_id', '==', usuario_id));


            // Execute a consulta
            const snapshot = await getDocs(q);
    
            snapshot.forEach((doc) => {
                setEndereco({...doc.data(), id: doc.id});
            })
        }catch(error){
            console.error('Erro ao consultar coleção: ', error)
        }
    }

    async function updateEndereco(data) {
        updateDoc(doc(db, 'endereco', endereco.id), {
            logradouro: data.logradouro,
            numero: data.numero,
            bairro: data.bairro
        }).then(() => {
            console.log('Dados atualizados')
            props.navigation.navigate('Perfil')
        }).catch(error => 'Não foi possivel atualizar')
    }

    useEffect(() => {
        if(isFocused){
            console.log('A pagina foi recarregada');
            consulta();
        }
    }, [isFocused]);

    useEffect(() => {
        consulta();
    }, []);

    useEffect(() => {
        setValue('logradouro', endereco.logradouro);
        setValue('bairro', endereco.bairro);
        setValue('numero', endereco.numero);
    });

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.form}>
                <Text style={styles.title}>Atualização de Endereço</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Rua: </Text>
                    <Controller
                        control={control}
                        name='logradouro'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.logradouro ? '#aa0000' : '#dddddd'
                                    }
                                ]}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                </View>{/* Form Input */}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Número: </Text>
                    <Controller
                        control={control}
                        name='numero'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.logradouro ? '#aa0000' : '#dddddd'
                                    }
                                ]}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                </View>{/* Form Input */}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Bairro: </Text>
                    <Controller
                        control={control}
                        name='bairro'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.logradouro ? '#aa0000' : '#dddddd'
                                    }
                                ]}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                </View>{/* Form Input */}

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(updateEndereco)}>
                    <Text style={styles.submitBtnText}>Atualizar</Text>
                </TouchableOpacity>
            </ScrollView>{/* Form */}
        
        </KeyboardAvoidingView>
    );
}