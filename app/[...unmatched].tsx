import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Gaps } from "../shared/tokens";
 

export default function UnmathchedCustom () {
    return <SafeAreaView style={styles.container}>
    <View style={styles.content}>
        <Image style={styles.image} source={require('../assets/unmatched.png')}/>
      
        <Text style={styles.unmText}>
        Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
        </Text>

        <Link style={styles.unmLink} href={'/'}>
        <Text>На главный экран</Text>
        </Link>
    </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 55
    },
    content: { 
        alignItems: 'center',
        gap: Gaps.g50
    },
    image: {
        width: 204,
        height: 282,
    },
    unmText: {
        fontSize: 18,
        fontFamily: 'FiraSansSemiBold',
        lineHeight: 21,
        textAlign: 'center',
        color: 'white'
    },
    unmLink: {
        textAlign: 'center',
        fontSize: 18,
        color: '#A97BFF'
    }
})