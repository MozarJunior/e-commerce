import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity, Keyboard, Pressable, KeyboardAvoidingView } from 'react-native';
import styles from "./style";

//Imports para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../components/config";

const schema = yup.object({
    iamgem: yup.string().required('Informe o endereço da imagem'),
    nome: yup.string().required('Informe o nome do produto'),
    descricao: yup.string().required('Informe a descrição do produto'),
    preco: yup.string().required('Informe o preço do produto'),
    quantidade: yup.string().required('Informe a quantidade de produtos')
});

export default function RegisterProduct(){

    const [message, setMessage] = useState(null);

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function cadastro(data){
        addDoc(collection(db, "produto"), {
            imagem: data.imagem,
            nome: data.nome,
            descricao: data.descricao,
            preco: data.preco,
            quantidade: data.quantidade,
        }).then(() => {
            console.log("Dados registrados");
        }).catch((error) => {
            console.log("algo deu errado");
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>

                <View style={styles.sectionForm}>
                    {/* { message && (
                        <Text>{message}</Text>
                    ) } */}


                    <View style={styles.form}>
                        <Text style={styles.title}>Cadastro de produtos</Text>

                        <View style={styles.formInput}>
                            <Text style={styles.textInput}>Imagem do produto</Text>
                            <Controller
                                control={control}
                                name="imagem"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput 
                                        style={[
                                            styles.input, {
                                                borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
                                            }
                                        ]}  
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />
                            { errors.imagem && <Text style={styles.messageError}>{errors.imagem?.message}</Text> }
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.textInput}>Nome do produto</Text>
                            <Controller
                                control={control}
                                name="nome"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput 
                                        style={[
                                            styles.input, {
                                                borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
                                            }
                                        ]}  
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />
                            { errors.nome && <Text style={styles.messageError}>{errors.nome?.message}</Text> }
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.textInput}>Descição do produto</Text>
                            <Controller
                                control={control}
                                name="descricao"
                                render={ ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[
                                            styles.input, {
                                                borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
                                            }
                                        ]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />
                            { errors.descricao && <Text style={styles.messageError}>{errors.descricao?.message}</Text> }
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.textInput}>Preço do produto</Text>
                            <Controller
                                control={control}
                                name="preco"
                                render={ ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[
                                            styles.input, {
                                                borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
                                            }
                                        ]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />
                            { errors.preco && <Text style={styles.messageError}>{errors.preco?.message}</Text> }
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.textInput}>Quantidade de produtos</Text>
                            <Controller
                                control={control}
                                name="quantidade"
                                render={ ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[
                                            styles.input, {
                                                borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
                                            }
                                        ]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                            />
                            { errors.quantidade && <Text style={styles.messageError}>{errors.quantidade?.message}</Text> }
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit(cadastro)}>
                            <Text style={styles.textButton} >Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </KeyboardAvoidingView>
    );
}