import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, Keyboard, View } from 'react-native';
import styles from './style';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../../../components/config';
//Imports para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RegisterEndereco(){

    const { control, handleSubmit, formState: { errors } } = useForm({

    });

    const onSubmit = data => console.log(data);

    async function cadastro(data){
        addDoc(collection(db, "endereco"), {
            logradouro: data.logradouro,
            numero: data.numero,
            bairro: data.bairro,
            usuario_id: "0qRBEeuugD5w2rKRhU8T",
        }).then(() => {
            console.log("Dados registrados");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionForm}>
                <View style={styles.form}>
                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Rua: </Text>
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

                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Número: </Text>
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

                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Bairro: </Text>
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

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(cadastro)}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>{/* Form */}
            </View>{/* Section Form */}
            
        </SafeAreaView>
    );
}