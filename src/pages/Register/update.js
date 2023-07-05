import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./style";
//Modulos para formulario
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../components/config";
import { useIsFocused } from "@react-navigation/native";

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    // email: yup.string().email("E-mail invalido").required("Informe seu e-mail"),
    // password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
    // confirmPassword: yup.string().min(6, "A confirmação deve ter pelo menos 6 digitos").required("Informe a confirmação da senha")
});


export default function RegisterUpdate( props ){
    const isFocused = useIsFocused();
    const [usuario_id, setUsuario_id] = useState(props.route.params.usuario_id);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [stateMessage, setStateMessage] = useState(false)

    const [message, setMessage] = useState(null);

    const { control, handleSubmit, formState:{ errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {console.log(data)};
    
    const dados = async () => {
        getDoc(doc(db, 'usuario', usuario_id)).then(docData => {
            if(docData.exists){
                setNome(docData.data().nome);
                setEmail(docData.data().email);
            }else{
                console.log('Dado não existe');
            }
        })
    }

    useEffect(() => {
        dados();
    }, []);

    async function updateUsuario(data) {
        updateDoc(doc(db, 'usuario', usuario_id), {
            nome: data.nome,
        }).then(() => {
            console.log('Dados atualizados')
            props.navigation.navigate('Perfil')
        }).catch(error => {
            setMessage('Não foi possivel Atualizar')
            setStateMessage(false)
            setTimeout(() => {
                setMessage(null);
            }, 3000)
        })
    }

    useEffect(() => {
        setValue('nome', nome);
        setValue('email', email);
    });

    return (
        <KeyboardAvoidingView style={styles.container}>

            <ScrollView style={styles.form}>
                <Text style={styles.title}>Atualizar Meus Dados</Text>
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
                                        borderBottomColor: errors.nome ? '#aa0000' : '#dddddd',
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
                                        borderBottomColor: errors.email ? '#aa0000' : '#dddddd',
                                    }
                                ]}  
                                placeholder="Digite seu Email..." 
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                editable={false}
                            />
                        )}
                    />
                    { errors.email && <Text style={styles.messageError}>{ errors.email?.message }</Text> }
                </View>{ /* Form Input */}

                {/* <View style={styles.formGroup}>
                    <Text style={styles.label}>Senha:</Text>
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
                { /*
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
                </View>*/}
                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(updateUsuario)}>
                    <Text style={styles.submitBtnText}>Atualizar</Text>
                </TouchableOpacity>
            </ScrollView>{ /* Form */}
            
            
        </KeyboardAvoidingView>
    );
}