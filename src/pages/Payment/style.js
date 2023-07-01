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
        padding: 20,
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
});

export default styles;