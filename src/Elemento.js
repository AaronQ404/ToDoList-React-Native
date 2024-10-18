import React from 'react';
import { Text } from 'react-native';


var idElemento = null
var nombreElemento = null;
var hechoElemento = false

const Elemento = (id,nombre) => {
  idElemento = id,
  nombreElemento = nombre,
  fecha_limite = null;
  hechoElemento = false  
}

const toggleElemento = (id) => {
    hechoElemento = hechoElemento == false ? true : false;
}



