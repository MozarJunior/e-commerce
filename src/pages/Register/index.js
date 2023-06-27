import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Keyboard, KeyboardAvoidingView } from "react-native";
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


export default function Register(){

    const [message, setMessage] = useState(null);

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function Cadastro(data){
        
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.sectionForm}>

                <View style={styles.form}>
                    {message && (
                        <Text>{message}</Text>
                    )}
                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Nome: </Text>
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

                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>E-mail: </Text>
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

                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Senha:</Text>
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

                    <View style={styles.formInput}>
                        <Text style={styles.textInput}>Confirme a senha:</Text>
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
                </View>{ /* Form */}
            </View>{ /* Section Form */}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit(Cadastro)}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}