import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import LoadingScreen from "./LoadingScreen";

export default function LoginScreen() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#B14DFF"
      />

      {/* TOPO */}
      <View style={styles.topContainer}>

        <Image
          source={require("../assets/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>

      {/* CARD LOGIN */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Acessar sua conta
        </Text>

        {/* EMAIL */}
        <View style={styles.inputContainer}>

          <Text style={styles.icon}>✉</Text>

          <TextInput
            placeholder="Seu email"
            placeholderTextColor="#8D8D8D"
            style={styles.input}
          />

        </View>

        {/* SENHA */}
        <View style={styles.inputContainer}>

          <Text style={styles.icon}>🔒</Text>

          <TextInput
            placeholder="Sua senha"
            placeholderTextColor="#8D8D8D"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity>
            <Text style={styles.forgot}>
              Esqueceu?
            </Text>
          </TouchableOpacity>

        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={styles.loginButton}>

          <Text style={styles.loginText}>
            Entrar
          </Text>

        </TouchableOpacity>

        {/* DIVISOR */}
        <View style={styles.dividerContainer}>

          <View style={styles.line} />

          <Text style={styles.or}>
            ou
          </Text>

          <View style={styles.line} />

        </View>

        {/* GOOGLE */}
        <TouchableOpacity style={styles.googleButton}>

          <Text style={styles.googleIcon}>G</Text>

          <Text style={styles.googleText}>
            Entrar com Google
          </Text>

        </TouchableOpacity>

        {/* CRIAR CONTA */}
        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Ainda não tem uma conta?
          </Text>

          <TouchableOpacity>

            <Text style={styles.createAccount}>
              Criar conta
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
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginTop: 15,
    width: "200%",
    height: "520%",
    marginBottom: 0,
  },

  card: {
    flex: 0.65,
    backgroundColor: "#F5F0FA",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#22005B",
    textAlign: "center",
    marginBottom: 15,
  },

  inputContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: "#E2D5F5",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },

  icon: {
    fontSize: 18,
    marginRight: 10,
    color: "#7B2CFF",
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: "#333",
  },

  forgot: {
    color: "#6C2BFF",
    fontWeight: "600",
  },

  loginButton: {
    height: 62,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,

    backgroundColor: "#7B2CFF",

    shadowColor: "#7B2CFF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 8,
  },

  loginText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D8C8EC",
  },

  or: {
    marginHorizontal: 1,
    fontSize: 18,
    color: "#6B5D7A",
    fontWeight: "600",
  },

  googleButton: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 4,
  },

  googleIcon: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#EA4335",
    marginRight: 10,
  },

  googleText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1F1F1F",
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
  },

  footerText: {
    fontSize: 18,
    color: "#777",
    marginBottom: 10,
  },

  createAccount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5A00FF",
  },

});