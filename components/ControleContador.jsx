import { StyleSheet, Text, View, Button } from 'react-native';
import {useState, useEffect} from 'react';


export default function ControleContador(){
    const [numero, setNumero] = useState(0);
    function aumentar(){
        setNumero(numero + 1);
    }
    function diminuir(){
        setNumero(numero - 1);
    }
    useEffect(()=>{
        console.log("O contador foi alterado");
    }, [numero]);
    return(
        <View>
            <Button onPress={diminuir} title='Diminuir'></Button>
            <Text>{numero}</Text>
            <Button onPress={aumentar} title='Aumentar'></Button>
        </View>
    )
}
