import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    homeHeader: {
        height: '15%',
        width: '100%',
        backgroundColor: '#00aaff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomEndRadius: 50,
    },

    homeHeaderText: {
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 600,
        paddingHorizontal: 20,
    },

    homeBody: {
        minHeight: '90%',
        width: '100%',
    },

    homeBodyCate: {
        height: '40%',
        backgroundColor: '#aaaaaa',
    },

    bodyProduct: {
        flex: 1,
        width: '100%',
        // alignItems: 'center',
    },

    bodyFlat: {
        flex: 1,
        height: '100%',
        width: '100%',
    },

    cardProduct: {
        height: 110,
        width: '90%',
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
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',

    },

    cardImage: {
        height: '100%',
        width: '35%',
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
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    section01: {
        width: '80%',
        height: '100%',
    },  

    cardAction: {
        backgroundColor: '#ff6b6b',
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
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