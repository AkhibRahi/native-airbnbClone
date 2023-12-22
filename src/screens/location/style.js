import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer:{
        margin: 10
    },
    textinput:{
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20
    },
    flatlistContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    flatlistIcon:{
        backgroundColor: 'lightgrey',
        padding: '3%',
        borderRadius: 10    
    },
    flatlistDesc:{
        fontSize: 18,
        marginLeft: 10,
        color: '#000'
    }
})
export default styles