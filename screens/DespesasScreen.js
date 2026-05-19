import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";

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

  const despesas = [

    {
      icon: "🍴",
      title: "Restaurante",
      date: "25 Abr",
      value: "R$ 230,00",
      color: "#FF8C66",
    },

    {
      icon: "🛒",
      title: "Mercado",
      date: "23 Abr",
      value: "R$ 480,00",
      color: "#D95BFF",
    },

    {
      icon: "🏋️",
      title: "Academia",
      date: "20 Abr",
      value: "R$ 120,00",
      color: "#FF5F8F",
    },

    {
      icon: "🚌",
      title: "Transporte",
      date: "19 Abr",
      value: "R$ 27,00",
      color: "#9B5CFF",
    },

    {
      icon: "💊",
      title: "Farmácia",
      date: "16 Abr",
      value: "R$ 95,00",
      color: "#F56DFF",
    },

    {
      icon: "🏠",
      title: "Moradia",
      date: "13 Abr",
      value: "R$ 2.000,00",
      color: "#FF6489",
    },

  ];

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#9B35FF"
      />

      {/* HEADER */}
      <ImageBackground
        source={require("../assets/fundo.png")}
        style={styles.header}
        resizeMode="cover"
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>
            Despesas
          </Text>

          {/* FILTROS */}
          <View style={styles.filterContainer}>

            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Hoje</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Semana</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activeFilter}>
              <Text style={styles.activeFilterText}>Mês</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Ano</Text>
            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

      {/* CONTEÚDO */}
      <View style={styles.content}>

        <Text style={styles.sectionTitle}>
          Transações Recentes
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {despesas.map((item, index) => (

            <View
              key={index}
              style={styles.card}
            >

              <View style={styles.leftCard}>

                <View
                  style={[
                    styles.iconBox,
                    {
                      backgroundColor: item.color,
                    },
                  ]}
                >

                  <Text style={styles.icon}>
                    {item.icon}
                  </Text>

                </View>

                <View>

                  <Text style={styles.cardTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.cardDate}>
                    {item.date}
                  </Text>

                </View>

              </View>

              <Text style={styles.value}>
                {item.value}
              </Text>

            </View>

          ))}

          {/* TOTAL */}
          <View style={styles.totalCard}>

            <Text style={styles.totalText}>
              Total de Gastos (Mês)
            </Text>

            <Text style={styles.totalValue}>
              R$ 5.000,00
            </Text>

          </View>

        </ScrollView>

      </View>

      {/* BOTÃO FLUTUANTE */}
      <TouchableOpacity style={styles.floatingButton}>

        <Text style={styles.floatingButtonText}>
          +
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F2FC",
  },

  header: {
    height: 230,
    overflow: "hidden",

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(110, 0, 255, 0.20)",

    paddingTop: 70,
    paddingHorizontal: 22,
  },

  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 30,
  },

  /* FILTROS */

  filterContainer: {
    height: 70,

    backgroundColor: "rgba(255,255,255,0.35)",

    borderRadius: 25,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    paddingHorizontal: 10,
  },

  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  filterText: {
    color: "#2E184A",
    fontSize: 22,
  },

  activeFilter: {
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 28,
    paddingVertical: 14,

    borderRadius: 18,
  },

  activeFilterText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2A143F",
  },

  /* CONTENT */

  content: {
    flex: 1,
    paddingHorizontal: 18,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#24132F",
    marginBottom: 18,
  },

  /* CARD */

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    padding: 16,

    marginBottom: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 5,
  },

  leftCard: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 62,
    height: 62,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  icon: {
    fontSize: 28,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#24132F",
  },

  cardDate: {
    color: "#6F6780",
    fontSize: 18,
    marginTop: 3,
  },

  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#24132F",
  },

  /* TOTAL */

  totalCard: {
    backgroundColor: "#E9D8FF",

    borderRadius: 22,

    padding: 20,

    marginTop: 10,
    marginBottom: 120,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E184A",
  },

  totalValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6F00FF",
  },

  /* BOTÃO FLUTUANTE */

  floatingButton: {
    position: "absolute",

    bottom: 35,
    right: 25,

    width: 75,
    height: 75,

    borderRadius: 100,

    backgroundColor: "#A63DFF",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#6F00FF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 12,
  },

  floatingButtonText: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "300",
    marginTop: -2,
  },

});