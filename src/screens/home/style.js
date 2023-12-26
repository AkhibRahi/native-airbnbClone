import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center'
      },
    title:{
        fontSize: 80,
        fontWeight: "bold",
        color: "white",
        width: '70%',
        marginLeft: 25
    },
    button:{
        marginTop: 25,
        marginLeft: 25,
        height: 40,
        backgroundColor: "white",
        width: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
    searchButton:{
        alignItems: 'center',
        position: 'absolute',
        top: "5%",
        left: '5%',
        backgroundColor: "#fff",
        height: '8%',
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        paddingHorizontal: '8%',
        flexDirection: 'row',
        cursor: 'pointer'
    },
    searchText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        cursor: 'pointer'

       
    }

});

export default styles;