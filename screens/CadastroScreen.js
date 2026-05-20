import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import LoadingScreen from "./LoadingScreen";

export default function CadastroScreen() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#C86BFF"
      />

      {/* TOPO */}
      <View style={styles.topContainer}>

        <Image
          source={require("../assets/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>

      {/* CARD */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Crie sua conta
        </Text>

        <Text style={styles.subtitle}>
          Leva menos de 1 minuto para se cadastrar!
        </Text>

        {/* NOME */}
        <View style={styles.inputContainer}>

          <Image
            source={require("../assets/usuario.png")}
            style={styles.iconImg}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Seu nome"
            placeholderTextColor="#8B7AA8"
            style={styles.input}
          />

        </View>

        {/* EMAIL */}
        <View style={styles.inputContainer}>

          <Image
            source={require("../assets/email.png")}
            style={styles.iconImg}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Seu email"
            placeholderTextColor="#8B7AA8"
            style={styles.input}
          />

        </View>

        {/* SENHA */}
        <View style={styles.inputContainer}>

          <Image
            source={require("../assets/senha.png")}
            style={styles.iconImg}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Crie uma senha"
            placeholderTextColor="#8B7AA8"
            secureTextEntry
            style={styles.input}
          />

        </View>

        <Text style={styles.passwordInfo}>
          Mínimo 6 caracteres
        </Text>

        {/* CONFIRMAR SENHA */}
        <View style={styles.inputContainer}>

          <Image
            source={require("../assets/senha.png")}
            style={styles.iconImg}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Confirme a senha"
            placeholderTextColor="#8B7AA8"
            secureTextEntry
            style={styles.input}
          />

        </View>

        {/* BOTÃO */}
        <TouchableOpacity activeOpacity={0.8}>

          <LinearGradient
            colors={["#B156F9", "#0E9EEA"]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1.9, y: 0 }}
            style={styles.registerButton}
          >

            <Text style={styles.registerText}>
              Cadastrar
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        {/* FOOTER */}
        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Já tem uma conta?
          </Text>

          <TouchableOpacity>

            <Text style={styles.loginLink}>
              Entrar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#C86BFF",
  },

  topContainer: {
    flex: 0.28,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  logo: {
    width: "170%",
    height: "520%",
  },

  card: {
    flex: 0.72,
    backgroundColor: "#F6F1FB",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2B0060",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#7D6C97",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },

  inputContainer: {
    height: 62,
    borderWidth: 1,
    borderColor: "#E2D4F8",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,
    marginBottom: 10,
  },

  iconImg: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },

  passwordInfo: {
    color: "#7D6C97",
    marginTop: -5,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 14,
  },

  registerButton: {
    height: 64,
    borderRadius: 22,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,

    shadowColor: "#7B2CFF",

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 8,
  },

  registerText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 35,
  },

  footerText: {
    color: "#7D6C97",
    fontSize: 15,
    marginRight: 5,
  },

  loginLink: {
    color: "#5D00FF",
    fontSize: 20,
    fontWeight: "bold",
  },

});