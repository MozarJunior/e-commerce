import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    //Inicio do header

    header: {
        height: '30%',
        width: '100%',
        backgroundColor: '#00aaff',
        borderBottomEndRadius: 80,
    },

    headerTop: {
        height: '20%',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '18%',
    },

    cartButton: {
        width: '15%',
        height: '90%',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTopText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },

    headerBody: {
        height: '45%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    headerBodyText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#ffffff',
    },

    //Fim do header

    //Inicio da seção de endereço

    secaoEndereco: {
        height: '35%',
        width: '100%',
        backgroundColor: '#ffffff',
    },

    enderecoHeader: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomWidth: 1, 
        borderBottomColor: '#00aaff',
        flexDirection: "row",
    },

    enderecoHeaderText: {
        color: '#00aaff',
        fontSize: 17,
        fontWeight: 400,
    },

    enderecoBody: {
        width: '100%',
        height: '80%',
        padding: 20,
        justifyContent: 'center',
    },

    enderecoBodyText: {
        fontSize: 19,
        marginVertical: 2,
    },

    //Fim da seção de endereco

    //Inicio da seçao de dados

    secaoDados: {
        height: '45%',
        width: '100%',
        backgroundColor: '#ffffff',
    },

    button: {
        height: '20%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1, 
        borderColor: '#00aaff',
        borderRadius: 10,
        marginVertical: 5,
    },

    textButton: {
        color: '#00aaff',
        fontSize: 17,
        fontWeight: 400,
    },

    //Fim da seção de dados
});

export default styles;