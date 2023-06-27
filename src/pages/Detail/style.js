import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //Seção da image m
    sectionImage: {
        height: '45%',
        width: '100%',
    },

    image: {
        height: '100%',
        width: '100%',
    },
    //Fim da seção da imagem

    //Inicion da seção de descrição
    sectionProduto: {
        height: '42%',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },

    nomeProduto: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 7,
    },

    descricaoProduto: {
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 10,
    },
    
    precoProduto: {
        fontSize: 19,
        fontWeight: 700,

    },

    //Fim da seção de descrição

    //Inicio da seção de pagamento e carrinho
    sectionSale: {
        height: '13%',
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },

    cartButton: {
        width: '15%',
        height: '90%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: '#0000ff',
    },

    saleButton: {
        width: '80%',
        height: '90%', 
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: '#0000ff',
    },

    textButtomSale: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 600,
    },

    textButtomCart: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 600,
    },
    //Fim da seção de pagamento e carrinho
});

export default styles;