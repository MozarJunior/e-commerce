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

    //Início da seção de formulario
    sectionForm:{
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form:{
        width: '100%',
        height: '90%',
    },
    formInput: {
        width: '100%',
        marginTop: 10,
        marginBottom: 40,
    },
    textInput: {
        marginLeft: '10%',
    },
    input: {
        width: '80%',
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 7,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 17,
        color: '#aaaaaa',
        borderBottomWidth: 0.7,
        borderBottomColor: '#dddddd',
    },
    messageError:{
        color: '#aa0000',
        alignSelf: "center",
    },
    button:{
        width: '80%',
        padding: 15,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: '#0000ff',
    },
    textButton:{
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 600,
    },
    textForgot:{
        marginLeft: '10%',
        marginTop: 15,
        marginBottom: 35,
        color: '#00ddff',
        fontSize: 14,
        fontWeight: 500,
        alignSelf: 'flex-start',
    },
    textRegister:{
        marginTop: 40,
        fontSize: 13,
        fontWeight: 300,
        alignSelf: 'center',
    },
    textRegisterLink:{
        color: '#00ddff',
        fontWeight: 600,
    },
    //Fim da seção do formulario
});
export default styles;