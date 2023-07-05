import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //Início do sytle
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    //Início da seção logo
    sectionLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'gray',
    },
    textHigh:{
        fontSize: 35,
        fontWeight: 600,
    },
    textLow:{
        fontSize: 15,
        fontWeight: 400,
    },
    image:{
        width: 100,
        height: 80,
    },
    //Fim da seção logo

    //Novo estilo de formulario

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: "center",
        marginTop: '20%',
    },
    form: {
        width: '100%',
        minHeight: '100%',
        // alignItems: 'center',
    },
    formGroup: {
        width: '90%',
        marginBottom: 20,
        alignSelf: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    submitBtn: {
        width: '90%',
        padding: 10,
        backgroundColor: '#00aaff',
        borderRadius: 4,
        marginTop: 20,
        alignSelf: "center",
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    cardMessage: {
        height: '10%',
        width: '90%',
        border: '1px',
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    message: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }

    // button: {
    //     // backgroundColor: '#',
    //     padding: 5,
    //     borderRadius: 4,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 3,
    //     elevation: 3,
    // },
    // image: {
    //     width: 150,
    //     height: 100,
    // },

    // imagem: {
    //     height: 310,
    //     width: 325,
    //     marginBottom: 20,
    // },
});

export default styles;