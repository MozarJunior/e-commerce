import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./style";
//Modulos para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup.string().email("E-mail invalido").required("Informe seu e-mail"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
    confirmPassword: yup.string().min(6, "A confirmação deve ter pelo menos 6 digitos").required("Informe a confirmação da senha")
});
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../../../components/config";
import { addDoc, collection } from "firebase/firestore";
export default function Register(){

    const [message, setMessage] = useState(null);
    const [texto, setText] = useState(false);
    const [stateMessage, setStateMessage] = useState(false)
    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function createUser(data){
        await createUserWithEmailAndPassword(auth, data.email, data.password).then(value => {
            createUsuario(data, value.user.uid);
            setMessage('Cadastro Realizado');
            setStateMessage(true)
            setTimeout(() => {
                setMessage(null);
            }, 3000)
        }).catch(error => {
            setMessage('Não foi possivel realizar cadastro')
            setStateMessage(false)
            setTimeout(() => {
                setMessage(null);
            }, 3000)
        });
    }

    async function createUsuario(data, user_id){
        addDoc(collection(db, 'usuario'), {
            nome: data.nome,
            email: data.email,
            password: data.password,
            user_id: user_id
        }).then(value => {
            setMessage('Cadastro Realizado')
        }).catch(error => {
            setMessage('Não foi possivel realizar cadastro')
        });
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.form}>
            <Text style={styles.title} onPress={() => message()}>Cadastro de Usuário</Text>
                
                { message != null && (
                    <View style={[
                        styles.cardMessage, {
                            backgroundColor: stateMessage? '#52c41a': '#ff6b6b'
                        }
                    ]}>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                )  }
                

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nome: </Text>
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.confirmPassword ? '#aa0000' : '#dddddd',
                                    }
                                ]} 
                                placeholder="Digite seu Nome..." 
                                onChangeText={onChange}
                                value={value}//Valor do text input
                                onBlur={onBlur}//Chamado quando o text input é tocado
                            />
                        )}
                    />
                    { errors.nome && <Text style={styles.messageError}>{ errors.nome?.message }</Text> }
                </View>{ /* Form Input */}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>E-mail: </Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.confirmPassword ? '#aa0000' : '#dddddd',
                                    }
                                ]}  
                                placeholder="Digite seu Email..." 
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    { errors.email && <Text style={styles.messageError}>{ errors.email?.message }</Text> }
                </View>{ /* Form Input */}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Senha:</Text>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.confirmPassword ? '#aa0000' : '#dddddd',
                                    }
                                ]} 
                                placeholder="Digite sua Senha..." 
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                secureTextEntry={true}//Esconder os caracteres
                            />
                        )}
                    />
                    { errors.password && <Text style={styles.messageError}>{ errors.password?.message }</Text> }
                </View>{ /* Form Input */}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Confirme a senha:</Text>
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.input, {
                                        borderBottomColor: errors.confirmPassword ? '#aa0000' : '#dddddd',
                                    }
                                ]}  
                                placeholder="Confirme Sua senha" 
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                secureTextEntry={true}//Esconder os caracteres
                            />
                        )}
                    />
                    { errors.confirmPassword && <Text style={styles.messageError}>{ errors.confirmPassword?.message }</Text> }
                </View>{ /* Form Input */}

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(createUser)}>
                    <Text style={styles.submitBtnText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>{ /* Form */}
        </KeyboardAvoidingView>
    );
}