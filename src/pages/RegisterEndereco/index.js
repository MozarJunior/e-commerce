import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './style';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../../../components/config';
//Imports para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    logradouro: yup.string().required("Informe sua rua"),
    bairro: yup.string().required('Informe seu Bairro'),
    numero: yup.string().required('Informe o número da sua casa')
})

export default function RegisterEndereco( props ){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    async function cadastro(data){
        addDoc(collection(db, "endereco"), {
            logradouro: data.logradouro,
            numero: data.numero,
            bairro: data.bairro,
            usuario_id: props.route.params.usuario_id,
        }).then(() => {
            console.log("Dados registrados");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.form}>
                <Text style={styles.title}>Cadastro de Endereço</Text>
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

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(cadastro)}>
                    <Text style={styles.submitBtnText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>{/* Form */}
            
        </KeyboardAvoidingView>
    );
}