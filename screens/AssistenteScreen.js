import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

import LoadingScreen from "./LoadingScreen";

export default function LunaScreen() {

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
        backgroundColor="#7B2CFF"
      />

      {/* HEADER */}
      <ImageBackground
        source={require("../assets/luna-bg.png")}
        style={styles.header}
        resizeMode="cover"
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>
            Luna, assistente financeira
          </Text>

          <Text style={styles.description}>
            Olá! Estou aqui para te ajudar com seus
            investimentos, gastos e muito mais.
            Faça sua pergunta!
          </Text>

          {/* INPUT */}
          <View style={styles.inputContainer}>

            <Text style={styles.inputIcon}>
              ✨
            </Text>

            <TextInput
              placeholder="Digite sua mensagem..."
              placeholderTextColor="#6D4A91"
              style={styles.input}
            />

            <TouchableOpacity>

              <Text style={styles.sendButton}>
                ✈
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

      {/* NOTIFICAÇÕES */}
      <View style={styles.notificationsContainer}>

        <Text style={styles.notificationsTitle}>
          Minhas notificações
        </Text>

        {/* CARD 1 */}
        <View style={styles.notificationCard}>

          <Text style={styles.cardEmoji}>
            ✨
          </Text>

          <Text style={styles.cardText}>
            <Text style={styles.bold}>
              Parabéns!
            </Text>{" "}
            Você economizou{" "}
            <Text style={styles.bold}>
              12%
            </Text>{" "}
            em relação ao mês passado.
          </Text>

        </View>

        {/* CARD 2 */}
        <View style={styles.notificationCard}>

          <Text style={styles.cardEmoji}>
            🍴
          </Text>

          <Text style={styles.cardText}>
            Seus gastos com alimentação estão{" "}
            <Text style={styles.bold}>
              25%
            </Text>{" "}
            mais altos em relação ao mês passado.
          </Text>

        </View>

        {/* CARD 3 */}
        <View style={styles.notificationCard}>

          <Text style={styles.cardEmoji}>
            🍴
          </Text>

          <Text style={styles.cardText}>
            Você gastou{" "}
            <Text style={styles.bold}>
              R$ 300,00
            </Text>{" "}
            com restaurantes nesta semana,
            cuidado com o orçamento.
          </Text>

        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F0FC",
  },

  header: {
    height: 380,
    overflow: "hidden",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(124, 0, 255, 0.20)",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 22,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
  },

  description: {
    color: "#F5EAFF",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 35,
  },

  /* IA */

  aiContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },

  aiGlow: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  /* INPUT */

  inputContainer: {
    width: "100%",
    height: 50,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,

    shadowColor: "#6F00FF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  inputIcon: {
    fontSize: 28,
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 20,
    color: "#4B2378",
  },

  sendButton: {
    fontSize: 28,
    color: "#7B2CFF",
    marginLeft: 10,
  },

  /* NOTIFICAÇÕES */

  notificationsContainer: {
    flex: 1,
    padding: 22,
  },

  notificationsTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5B2D91",
    marginBottom: 22,
  },

  notificationCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 25,

    padding: 18,

    flexDirection: "row",

    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  cardEmoji: {
    fontSize: 34,
    marginRight: 15,
  },

  cardText: {
    flex: 1,
    fontSize: 15,
    color: "#5D4677",
    lineHeight: 20,
  },

  bold: {
    fontWeight: "bold",
    color: "#4D1F80",
  },

});