import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MensagemBoasVindas from './components/MensagemBoasVindas';
import ControleContador from './components/ControleContador';
import EditorNome from './components/EditorNome';

export default function App() {
  return (
    <View style={styles.container}>
      <MensagemBoasVindas />
      <ControleContador />
      <EditorNome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


