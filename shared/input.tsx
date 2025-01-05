import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { Colors, Radius } from "./tokens"
import React, { useState } from "react"
import EyeOpened from "../assets/icons/eyeOpened"
import EyeClosed from "../assets/icons/eyeClosed"

export const Input = ({isPassword, ...props} : TextInputProps & {isPassword?: boolean}) => {
   const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
   
    return (
        <View>
        <TextInput 
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
        style={styles.input}
        {...props}/>
        {isPassword && 
        <Pressable onPress={()=>setIsPasswordVisible(prevState => !prevState)} style={styles.icon}>
        {isPasswordVisible ? <EyeOpened/> : <EyeClosed/>}
        </Pressable>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.lightBlack,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
        color: 'white',
        fontFamily: 'FiraSans'
    },
    icon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18 
    }
})