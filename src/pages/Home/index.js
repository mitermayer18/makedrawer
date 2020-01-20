import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <View style={{flex:1 , alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../../assets/eorganico.png')} />
      <Image source={require('../../assets/Icon_basket.png')} />      
      
      
        <TextInput 
          placeholder="Buscar..."
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          
        />
        <View style={styles.button}>
          <TouchableOpacity >
            <Text>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text>Frutas</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text>Verduras</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text>Legumes</Text>
          </TouchableOpacity>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  button:{
    paddingHorizontal: 20,
    width:200,
    height:120,
    marginRight: 15,
    alignItems: 'center'
  }
})