import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import color from '../../../assets/theme/color'
import styles from './styles'

const Input = ({
        onChangeText,
        icon, 
        iconPosition , 
        style, 
        value, 
        label, 
        error,
         ...props }) => {

    const [focused, setFocused] = useState(false)

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
        <View style={styles.inputcontainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, {alignItems:icon?'center':'baseline',borderColor:getBorderColor() ,flexDirection:getFlexDirection()}]}>

           <View>{icon && icon }</View>
             <TextInput
                style={[styles.textinput, style]}
                onChangeText={onChangeText}
                value={value}
                onFocus = {()=>(setFocused(true))}
                onBlur = {()=>(setFocused(false))}
                {...props}
                />
        </View>
        {error &&  <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input
