import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:1,
        justifyContent:"space-around",
    },
    form: {
        width: "100%",
        height: "auto",
        padding: 10,
        marginBottom:1,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
        marginTop:15,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:10,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
        marginTop:0,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    listImcs:{
        marginBottom:20,
    },
    resultImcItem:{
        fontSize:24,
        color:"red",
        height:30,
        width:"100%",
        marginTop:15,
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:14,
        color:"red",
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",
        marginTop:0,
    }
});

export default styles