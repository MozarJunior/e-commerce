import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPix: {
        flex: 1,
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    container: {
        flex: 1,
        // padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '100%',
        alignItems: 'center',
    },
    formGroup: {
        width: '100%',
        marginBottom: 20,
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
        width: '100%',
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 4,
        marginTop: 20,
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        // backgroundColor: '#',
        padding: 5,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    image: {
        width: 150,
        height: 100,
    },

    imagem: {
        height: 310,
        width: 325,
        marginBottom: 20,
    },

    sectionPagamento: {
        height: '18%',
        width: '100%',
        backgroundColor: '#aaa',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },



    
    cardProduct: {
        height: 110,
        width: '100%',
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
    },

    cardBody: {
        height: '100%',
        width: '80%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'baseline',
        borderRadius: 10,
    },

    cardImage: {
        height: '100%',
        width: '30%',
        borderRadius: 10,
    },

    cardNameProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },

    sectionPreco:{
        flexDirection: 'column',
        height: '50%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    cardPrecoProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00aaff',
        paddingTop: 5,
    },
    
    cardQuantProduto: {
        fontSize: 14,
        fontWeight: 500,
        paddingTop: 5,
        color: '#000',
    },
});

export default styles;