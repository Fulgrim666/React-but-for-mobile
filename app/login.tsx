import { Image, StyleSheet, View, Text  } from 'react-native';
import { Input } from '../shared/input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/button';
import { Alert } from '../shared/ErrorNotification/alert';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function App() {
 const [error, setError] = useState('')
const alert = () => {
 setError('Неверный логин или пароль')  
 setTimeout(()=> {
  setError('')
 }, 4000)
}

  return (
    <View style={styles.container}>
      <Alert error={error} />
      <View style={styles.content}>
      <Image style={{alignSelf: 'flex-start'}} resizeMode='contain' source={require('../assets/group.png')}/>
     </View>
        <View style={styles.form}>
        <Input placeholder='Email' isPassword={false}/>
        <Input placeholder='Пароль' isPassword/>
        <Button text='Войти' onPress={alert} />
        <Link href={'/restore'}>
        <Text style={{color: 'white'}}>
        Восстановить пароль
        </Text>
       </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
justifyContent: 'center',
flex: 1,
backgroundColor: Colors.black,
padding: 50,
 },
 content: {
height: 30,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center',
 margin: 10
 },
 form: {alignSelf:'stretch', gap: Gaps.g16, margin: 10, padding: 10},
 
});
