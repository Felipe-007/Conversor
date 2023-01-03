/**
 * https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
 * 
 * https://free.currencyconverterapi.com/
 * 
 * Base URL: https://free.currencyconverterapi.com/api/v5/
 * convert?q=USD_BRL&compact=ultra&apiKey=AQUI ENTRA A API
 */
import axios from "axios";

const api = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5'
});

export default api;