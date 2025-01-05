import { useEffect, useState } from "react"
import { Text, Animated, StyleSheet, View, Dimensions } from "react-native"
 
import { Colors } from "../tokens"

export const Alert = ({error} : {error : string | undefined}) => {
    const [show, setShow] = useState<boolean>(false)
    const animatedValue = new Animated.Value(-100);

    function onEnter () {
        Animated.timing(animatedValue, {
            duration: 500,
            useNativeDriver: true,
            toValue: 0
        }).start()
    }

useEffect(()=> {
    if(!error) {
        return
    }
    setShow(true)
   
   const timer = setTimeout(()=>{setShow(false)},3000)
    return () => {
clearTimeout(timer)
    }
},[error])


if(!show) {
    return  <View></View>
}


    return (
        <Animated.View 
        style={{...styles.alert, transform: [{translateY: animatedValue}]}} 
        onLayout={onEnter}
        >
            <Text style={styles.errorText}>
           {error}
            </Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    alert: {
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.red,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50
    },
    errorText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'FiraSans'
    }
})