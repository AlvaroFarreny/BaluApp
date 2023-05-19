import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: 844,
    width: 394,
  },
  imagecenter: {
    marginTop: 90,
    marginBottom: 15,
    alignSelf: "center",
    maxWidth: 184,
    height: 126,
  },
  input: {
    marginTop: 12,
    height: 44,
    width: 276,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EEB1FF",
    borderRadius: 10,
    fontSize: 12,
    fontFamily: 'BalsamiqSans-Regular',
  },
  forgot: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 72,
    marginTop: 5,
    fontFamily: 'DMSans-Regular',
  },
  addButton: {
    width: 178,
    height: 42,
    borderRadius: 20,
    backgroundColor: "#97319E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  textaddButton: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
  },
});
  
const Registro = () => {

  const [nombre, setUsuario] = useState('');
  const [correo, setUsuario2] = useState('');
  const [telf, setUsuario3] = useState('');
  const [password, setUsuario4] = useState('');
  const [repetir, setUsuario5] = useState('');

  const navigation = useNavigation();

  const handleButtonClickHome = () => {
    navigation.navigate("Navbar");
  };

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={styles.backgroundImage}>

      <View style={{ margin: 20, alignItems: "center" }}>
        <Image
          style={styles.imagecenter}
          source={require("../../assets/logoBalu.png")}
        />
        <TextInput
          placeholder="NOMBRE DE USUARIO"
          placeholderTextColor="black"
          style={styles.input}
          value={nombre}
          onChangeText={(texto1) => setUsuario(texto1)}
        />
        <TextInput
          placeholder="CORREO ELECTRÓNICO"
          placeholderTextColor="black"
          style={styles.input}
          value={correo}
          onChangeText={(texto2) => setUsuario2(texto2)}
        />
        <TextInput
          placeholder="NÚMERO DE TELÉFONO"
          placeholderTextColor="black"
          style={styles.input}
          value={telf}
          onChangeText={(texto3) => setUsuario3(texto3)}
        />
        <TextInput
          placeholder="CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input}
          value={password}
          onChangeText={(texto4) => setUsuario4(texto4)}
        />
        <TextInput
          placeholder="REPETIR CONTRASEÑA"
          placeholderTextColor="black"
          style={styles.input}
          value={repetir}
          onChangeText={(texto5) => setUsuario5(texto5)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleButtonClickHome}>
          <Text style={styles.textaddButton}>REGISTRARME</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
    
  );
};

export default Registro;