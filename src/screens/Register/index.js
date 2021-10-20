import React from "react"
import {useNavigation} from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native"
import Container from "../../components/Common/Container"
import Input from "../../components/Common/inputs"
import { LOGIN } from "../../constants/routename"
import CustomButton from "../../components/Common/CustomButton"
import color from "../../assets/theme/color"

const register = ()=>{

    const [value_usename, onChangeText] = React.useState("Enter your username");
    const [value_usename, onChangeText] = React.useState("Enter your username");
    const [value_usename, onChangeText] = React.useState("Enter your username");
    const [value_usename, onChangeText] = React.useState("Enter your username");
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
               secureTextEntry={true}
               iconPosition='right'
            //    error='this field is required'
              />

              <Input 
               style={{padding:0}}
               label="First Name"
               onChangeText={(text)=>onChangeText(text)}
               value={value}
            //    icon={<Text>HIDE</Text>}
               iconPosition='right'
            //    error='this field is required'
              />

              <Input 
               style={{padding:0}}
               label="Last Name"
               onChangeText={(text)=>onChangeText(text)}
               value={value}
            //    icon={<Text>HIDE</Text>}
               iconPosition='right'
            //    error='this field is required'
              />

              <View>
                  <Text>Need an account ? </Text>
                  <TouchableOpacity onPress={()=>navigate(LOGIN)}>
                      <Text>REGISTER</Text>
                  </TouchableOpacity>
              </View>


              <CustomButton title='SUBMIT'  loading={false} disable={true} colors={color.success}/>
              <CustomButton title='SUBMITTING' OnPress={PressHandler} loading={true} disable={false} colors={color.warning} />
        </Container>
    )
}

export default register