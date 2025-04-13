import { useAtom } from "jotai";
import { View, Text } from "react-native";
import profileAtom  from "../entities/user/model/user.state";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import axios from "axios";
import  API  from "../entities/auth/api/api";
import { IAuthResponse } from "../entities/auth/model/auth.interfaces";

export default function Courses () {
    const [profile] = useAtom(profileAtom)
    
   async function getLogin () {
       const {data} = await axios.post<IAuthResponse>(API.login, {
        email: 'vasia@pupkin.ru',
        password: '12345678',
       })
       console.log(data);
       
    }

    useEffect(()=>{
        getLogin()
    },[])

    return <View>
        <Text style={{color: 'white'}}>
            {profile.profile?.name}
        </Text>
    </View>
}