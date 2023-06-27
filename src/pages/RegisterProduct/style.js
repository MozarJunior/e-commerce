import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff', 
    },
    sectionForm:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 500,
        marginBottom: 30,
    },
    form:{
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
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
});

export default styles;