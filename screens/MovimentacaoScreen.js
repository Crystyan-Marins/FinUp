import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import LoadingScreen from "./LoadingScreen";

export default function MovimentacaoScreen() {

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

      <Text style={styles.title}>
        Movimentações
      </Text>

      <Text>
        Histórico financeiro do usuário.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

});