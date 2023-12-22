import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        margin: 20,
        
    },
    Image:{
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedroom:{
        color: 'gray',
        marginTop: 10,
        fontSize: 16
    },
    desc:{
        fontSize: 22,
        fontWeight: '500',
        color: '#000'
    },
    price:{
        flexDirection: 'row',
        marginTop: 5,
        fontSize: 16
    },
    oldPrice:{
        fontSize: 16,
        textDecorationLine: 'line-through',
        fontWeight: 'bold'
    },
    newPrice:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16
    },
    night:{
        fontSize: 16   
    },
    total:{
        textDecorationLine: 'underline',
        fontSize: 16
        
    }
})
export default styles;