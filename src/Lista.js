import React, {useState} from 'react';
import {Text, View, Image, Button, TextInput, Alert, ScrollView, AsyncStorage} from 'react-native';


const Elemento = props => {
    const [descripcion,setDescripcion] = useState('');
    const [labelDescripcion,setLabelDescripcion] = useState('◎');
    const [completado,setCompletado] = useState(false);
    
    const completarTarea = () => {
      setCompletado(!completado);
      if (completado==true){
        setLabelDescripcion('◉')
      }else{
        setLabelDescripcion('◎')
      }
      
    }

    const addElemento = () => {
      console.log('añadida tarea...')
    }
    


    return (
      <View>
        <Text>{completado}</Text>
        <TextInput
        id='nombre'
        name='nombre'
        style={{height: 40}}
        placeholder="Pon nombre a la tarea"
        onChangeText={newText => setDescripcion(newText)}
        // defaultValue={nombreGato}
      />
        <Button onPress={() => {
          completarTarea();
        }}        
        title = {labelDescripcion}
        />
      </View>
    );
  };
  

  const Lista = () => {
    const listaArray = [];
    let i = 0;
    for(i=0;i<10;i++){
      listaArray.push('gatete'+i)
    }


    return (      
      <View>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.6cBTiqWzzJH-mvcJKVSkZwHaE8?rs=1&pid=ImgDetMain',
          }}
          style={{width: 200, height: 200}}
        />
      
        <ScrollView>
          {listaArray.map((index) => (
            <Elemento key={index}/>
          ))}
        </ScrollView>
        <Button onPress={() => {
          addElemento();
        }}           
        title = {'Añadir tareas'}     
        />
      </View>
    );
  };

export default Lista;
