/**
 * 
 */
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default class Conversor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0,
    };

    this.converter = this.converter.bind(this)
  }

  converter(){
    alert('ok')
  }

  render() {

    //desconstrução, afim de pegar os valores de Conversor moedaA="BLR" moedaB="USD" />
    const {moedaA, moedaB} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

        <TextInput
          style={styles.areaInput}
          placeholder='Valor a ser convertido'
          onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}  //altera o valor de moedaB_valor por meio do setState
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>{this.setState.valorConvertido}</Text>
      </View>
    )
  }
}