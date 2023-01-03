/**
 * 
 */
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
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

  async converter() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB  //esta concatenando BRL_USD
    const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)  //insere o BRL_USD dentro da url
    let cotacao = response.data[de_para] //pegara somente a resposta do response, somente o valor com de_para, já pegando aqui os valores dentro da api

    let resultado = (cotacao * parseInt(this.state.moedaB_valor)) //pega o resultado da cotacao e multiplica pela moedaB_valor, parseInt converte para numero, o valor de moedaB_valor foi alterado pelo input

    this.setState({  //altera o valor de valorConvertido para o valor contido em resultado
      valorConvertido: resultado.toFixed(2)
    })

    //Fecha o techado automaticamente
    Keyboard.dismiss()
  }

  render() {

    //desconstrução, afim de pegar os valores de Conversor moedaA="BRL" moedaB="USD" />
    const { moedaA, moedaB } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

        <TextInput
          style={styles.areaInput}
          placeholder='Valor a ser convertido'
          onChangeText={(moedaB_valor) => this.setState({ moedaB_valor })}  //altera o valor de moedaB_valor por meio do setState
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>
          {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
        </Text>
      </View>//{(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido} se o valor convertido for zero, nao apresenta nada, se não aparecerá o valor convertido
    )
  }
}