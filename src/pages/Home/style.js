import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
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
        fontSize: 17,
        fontWeight: 500,
        paddingHorizontal: 20,
    },

    homeBody: {
        minHeight: '85%',
        width: '100%',
    },

    homeBodyCate: {
        height: '40%',
        backgroundColor: '#aaaaaa',
    },

    homeBodyCateText: {},
    
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
        alignItems: 'baseline',
        borderRadius: 10,
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