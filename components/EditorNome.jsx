import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState, useEffect} from 'react';


export default function EditorNome(){
    const[nomeAtual, setNomeAtual] = useState('');
    const[nome, setNome] = useState('');
    useEffect(()=>{
        setNomeAtual(nome);
    }, [nome]);
    return(
        <View>
            <Text>Olá, {nomeAtual}!</Text>
            <TextInput placeholder={"Digite seu Nome"} onChangeText={setNome}/>
        </View>
    )
}
