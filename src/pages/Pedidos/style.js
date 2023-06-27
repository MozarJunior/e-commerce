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
        minHeight: '85%',
        width: '100%',
    },

    homeBodyCate: {
        height: '40%',
        backgroundColor: '#aaaaaa',
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
        alignItems: 'center',
    },

    cardProduct: {
        height: '20%',
        width: '90%',
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
    },

    cardBody: {
        height: '100%',
        width: '70%',
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
        fontSize: 14,
        fontWeight: 400,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },

    sectionPreco:{
        flexDirection: 'row',
        height: '40%',
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'space-around',
    },

    cardPrecoProduto: {
        fontSize: 15,
        fontWeight: 500,
        color: '#00dd00',
        paddingTop: 5,
    },
    
    cardQuantProduto: {
        fontSize: 13,
        fontWeight: 400,
        paddingTop: 5,
    },
});

export default styles;