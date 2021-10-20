import { useNavigation } from '@react-navigation/native'
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import color from "../../assets/theme/color";
import Container from "../../components/Common/Container/index"
import CustomButton from "../../components/Common/CustomButton/index";
import Input from "../../components/Common/inputs";
import { REGISTER } from '../../constants/routename';

const login = ()=>{
    const [value_username, onChangeText] = React.useState("Enter your username");
    const [value_passwrod, onChangeText] = React.useState("Enter your username");
    const {navigate} = useNavigation()

    const PressHandler=()=>{
        console.log('pressed button')
    }

    return(
        <Container>
            <Input 
               style={{padding:0}}
               label="Username"
               onChangeText={(text)=>onChangeText(text)}
               value={value}
            //    icon={<Text>HIDE</Text>}
               iconPosition='left'
               error='this field is required'
              />
              <Input 
               style={{padding:0}}
               label="Password"
               onChangeText={(text)=>onChangeText(text)}
               value={value}
               icon={<Text>HIDE</Text>}
               iconPosition='right'
            //    error='this field is required'
              />

              <View>
                  <Text>Need an account ? </Text>
                  <TouchableOpacity onPress={()=>navigate(REGISTER)}>
                      <Text>REGISTER</Text>
                  </TouchableOpacity>
              </View>


              <CustomButton title='SUBMIT'  loading={false} disable={true} colors={color.success}/>
              <CustomButton title='SUBMITTING' OnPress={PressHandler} loading={true} disable={false} colors={color.warning} />
        </Container>
    )
}

export default login