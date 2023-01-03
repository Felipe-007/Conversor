/**
 * https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
 * 
 * https://free.currencyconverterapi.com/
 * 
 * https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=AQUI ENTRA A API
 */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Conversor from "./src/Conversor";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="BRL" moedaB="USD" />
      </View>
    )
  }
}