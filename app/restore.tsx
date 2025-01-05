import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Restore () {
    return (
        <View>
            <Link href={'/'}>
            <Text style={{color: 'white'}}>Restore</Text>
            </Link>
         
        </View>
    )
}