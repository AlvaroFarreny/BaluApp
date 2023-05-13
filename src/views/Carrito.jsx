import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { StackNavigator, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 20,
    alignSelf: "center",
    width: 116,
    height: 80,
  },
  textoCarrito: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 20,
    fontSize: 23,
  },
  rectangulo: {
    backgroundColor: "#fff",
    height: 112,
    width: 335,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 8,
  },
  pagoContainer: {
    color: "#97319E",
    width: 335,
    height: 51,
  },
  pago: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 18,
  },
});
  
const Carrito = () => {


  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

        <View style={{ margin: 20 }}>
            <Image
            style={styles.imagecenter}
            source={require("../../assets/logoBalu.png")}
            />
            <Text style={styles.textoCarrito}>Tu carrito</Text>

            <View style={styles.rectangulo}>

            </View>
            <View style={styles.rectangulo}>

            </View>
            <View style={styles.rectangulo}>

            </View>

            <Text style={styles.textoCarrito}>  Total                                  46€</Text>

            <View>
                <Button
                title="Procesar pago"
                color="#97319E"
                style={styles.pagoContainer}
                onPress={() => navigation.navigate('Carrito2')}
                />
            </View>
            
        </View>


    </ImageBackground>
    
  );
};

export default Carrito;
