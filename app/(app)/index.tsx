import { useAtom } from "jotai";
import { View, Text } from "react-native";
import { profileAtom } from "../entities/user/model/user.state";

export default function Courses () {
    const [profile] = useAtom(profileAtom)
    return <View>
        <Text style={{color: 'white'}}>
            {profile.profile?.name}
        </Text>
    </View>
}