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

    //Inicio do Card de Status

    homeCard: {
        height: '30%',
        width: '95%',
        marginVertical: 20,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row',
        borderRadius: 20,
    },

    cardIcon: {
        height: '90%',
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },

    textCardIcon: {
        fontSize: 11,
    },

    bodyCardIcon: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
    },

    sectionCategoria: {
        height: '35%',
        width: '20%',
        alignItems: "center",
        justifyContent: "center",
    },

    //Fim do card de Status

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