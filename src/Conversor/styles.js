import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput: {
    height: 45,
    width: 280,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    borderRadius: 5,
    color: '#000',
  },
  botaoArea: {
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 150,
    borderRadius: 5,
    marginTop: 15,
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF'
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
})