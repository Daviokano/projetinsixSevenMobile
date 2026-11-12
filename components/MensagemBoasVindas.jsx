import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react';

export default function MensagemBoasVindas(){
    const[nome, setNome] = useState('');
    useEffect(()=>{
        setNome('Bem-vindo ao Sistema!');
        console.log("useEffect Q1 disparou");
    },[]);

    return(
        <View>
            <Text>{nome}</Text>
        </View>
    )
}
