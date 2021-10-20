import { StyleSheet } from "react-native"
import color from "../../../assets/theme/color"

export default StyleSheet.create({

    wrapper:{
        height:42,
        // borderColor:color.info,
        borderWidth:1,
        borderRadius:4,
        // flexDirection:'row'
    },

    inputcontainer:{
        paddingVertical:12
    },

    textinput:{
        // backgroundColor:color.warning,
        flex:1, 
    },

    error:{
        color:color.danger,
        marginTop:3
    }
})