import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import LoadingScreen from "./LoadingScreen";

export default function DespesasScreen() {

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
        Registrar Despesa
      </Text>

      <TextInput
        placeholder="Nome da despesa"
        style={styles.input}
      />

      <TextInput
        placeholder="Valor"
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Salvar" onPress={() => {}} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },

});