import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity, Keyboard, Pressable, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./style";
import logo from "../../assets/img/logo.png";
//Imports para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email('E-mail invalidado').required('Informe seu e-mail'),
    password: yup.string().min(6, 'Senha Invalida').required('Informe sua senha')
});

export default function Login( {navigation} ){

    const [message, setMessage] = useState(null);

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function Login(data){
        console.log('fazendo login');
    }

    return (
        <KeyboardAvoidingView onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.sectionLogo}>
                <Image 
                    style={styles.image}
                    title="Logo Marca" 
                    source={logo}
                />
                <Text style={styles.textHigh}>Welcome to Back</Text>
                <Text style={styles.textLow}>Please, sign in to continue</Text>
            </View>


            <View style={styles.sectionForm}>
                { message && (
                    <Text>{message}</Text>
                ) }
                <View style={styles.form}>
                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>E-Mail</Text>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                    style={[
                                        styles.input, {
                                            borderBottomColor: errors.email ? '#aa0000' : '#dddddd',
                                        }
                                    ]}  
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                        { errors.email && <Text style={styles.messageError}>{ errors.email?.message }</Text> }
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Password</Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                    style={[
                                        styles.input, {
                                            borderBottomColor: errors.password ? '#aa0000' : '#dddddd',
                                        }
                                    ]} 
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    secureTextEntry={true}//Esconder os caracteres
                                />
                            )}
                        />
                        { errors.password && <Text style={styles.messageError}>{ errors.password?.message }</Text> }
                    </View>
                    <Text style={styles.textForgot} >Forgot Password?</Text>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(Login)}>
                        <Text style={styles.textButton} >Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textRegister}>Don´t have an account? <Text style={styles.textRegisterLink} onPress={() => navigation.navigate('register')}>Sing up</Text></Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}