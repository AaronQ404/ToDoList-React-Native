import React, {useState} from 'react';
import {Text, View, Image, Button, TextInput, Alert, ScrollView} from 'react-native';

const Gato = props => {
    const [nombreGato,setNombreGato] = useState('');
    const [labelGato,setLabelGato] = useState('');
    const btnHandler = () => {
      setLabelGato(nombreGato)
    }
    


    return (
      <View>
        <Text >{!labelGato?'Me das nombre?':labelGato}</Text>
        <TextInput
        id='nombre'
        name='nombre'
        style={{height: 40}}
        placeholder="Nombre del gato"
        onChangeText={newText => setNombreGato(newText)}
        // defaultValue={nombreGato}
      />
        <Button onPress={() => {
          btnHandler();
        }}        
        title = {!labelGato ?'Dame un nombre':'Que Dios se lo pague bienaventurado'}
        />
      </View>
    );
  };
  

  const Cafe = () => {
    const manadaGatos = [];

    for(i=0;i<10;i++){
      manadaGatos.push('gatete'+i)
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
          {manadaGatos.map((index) => (
            <Gato key={index}/>
          ))}
        </ScrollView>
      </View>
    );
  };

export default Cafe;
