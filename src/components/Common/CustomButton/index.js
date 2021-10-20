import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import color from '../../../assets/theme/color'
import styles from './styles'

const CustomButton = ({ 
        title, 
        disable,
        loading,
        colors,
         OnPress}) => {

    const [focused, setFocused] = useState(false)
    console.log(OnPress)

    const getFlexDirection=()=>{
        if (iconPosition==='left'){
            return 'row'
        }
        else if(iconPosition==='right'){
            return 'row-reverse'
        }
    }

    const getBorderColor=()=>{

        if(focused){
            return color.primary
        }

        if(error){
            return color.danger
        }
        else{
            return color.info
        }
    }
    return (
        <TouchableOpacity onPress={OnPress} disabled={disable} style={[styles.inputcontainer,{borderColor:'red', backgroundColor:colors }]}>
            {loading && <ActivityIndicator size='small' color={color.primary}/> }
            {title &&  <Text>{title}</Text> }
        </TouchableOpacity>
    )
}

export default CustomButton
