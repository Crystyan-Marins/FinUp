import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";

import LoadingScreen from "./LoadingScreen";

export default function InvestimentoScreen() {

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

      {/* FUNDO */}
      <ImageBackground
        source={require("../assets/fundo.png")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.title}>
            Investimento
          </Text>

          {/* TABS */}
          <View style={styles.tabsContainer}>

            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>
                Carteira
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>
                Rendimentos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>
                Histórico
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* CONTEÚDO */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        >

          {/* CARD PRINCIPAL */}
          <View style={styles.mainCard}>

            <Text style={styles.cardTitle}>
              Valor Investido
            </Text>

            <Text style={styles.totalValue}>
              R$ 15.200,00
            </Text>

            <Text style={styles.profit}>
              ▲ 10,5% desde início
            </Text>

            <View style={styles.divider} />

            {/* GRÁFICO */}
            <View style={styles.chartContainer}>

              <View style={styles.legendContainer}>

                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: "#B15EFF" }]} />
                  <Text style={styles.legendText}>Tesouro Direto</Text>
                </View>

                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: "#34A853" }]} />
                  <Text style={styles.legendText}>Ações</Text>
                </View>

                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: "#FF4FB8" }]} />
                  <Text style={styles.legendText}>Fundos</Text>
                </View>

                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: "#4C8DFF" }]} />
                  <Text style={styles.legendText}>FIIs</Text>
                </View>

              </View>

              {/* GRÁFICO SIMULADO */}
              <View style={styles.chartCircle}>

                <View style={styles.innerCircle}>
                  <Text style={styles.chartText}>
                    25%
                  </Text>
                </View>

              </View>

            </View>

          </View>

          {/* DICAS */}
          <Text style={styles.sectionTitle}>
            Dicas de Investimento
          </Text>

          {/* CARD 1 */}
          <TouchableOpacity style={styles.tipCard}>

            <View style={styles.tipLeft}>

              <View style={styles.iconBox}>
                <Text style={styles.icon}>🏛️</Text>
              </View>

              <View>

                <Text style={styles.tipTitle}>
                  Tesouro Selic 2027
                </Text>

                <Text style={styles.tipDescription}>
                  Títulos pós-fixados do Tesouro Nacional
                </Text>

              </View>

            </View>

            <Text style={styles.tipProfit}>
              +10,7% a.a.
            </Text>

          </TouchableOpacity>

          {/* CARD 2 */}
          <TouchableOpacity style={styles.tipCard}>

            <View style={styles.tipLeft}>

              <View style={styles.iconBox}>
                <Text style={styles.icon}>🏦</Text>
              </View>

              <View>

                <Text style={styles.tipTitle}>
                  Itaú ITUB4
                </Text>

                <Text style={styles.tipDescription}>
                  Ações do Itaú Unibanco
                </Text>

              </View>

            </View>

            <Text style={styles.tipProfit}>
              +8,2% a.a.
            </Text>

          </TouchableOpacity>

          {/* CARD 3 */}
          <TouchableOpacity style={styles.tipCard}>

            <View style={styles.tipLeft}>

              <View style={styles.iconBox}>
                <Text style={styles.icon}>🏢</Text>
              </View>

              <View>

                <Text style={styles.tipTitle}>
                  Fundos Imobiliários
                </Text>

                <Text style={styles.tipDescription}>
                  Investimentos em FIIs
                </Text>

              </View>

            </View>

            <Text style={styles.tipProfit}>
              +9,5% a.a.
            </Text>

          </TouchableOpacity>

        </ScrollView>

      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F2FC",
  },

  background: {
    flex: 1,
  },

  backgroundImage: {
    resizeMode: "cover",
    opacity: 0.95,
  },

  header: {
    paddingTop: 70,
    paddingHorizontal: 22,
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,

    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
  },

  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    overflow: "hidden",
  },

  activeTab: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 16,
    margin: 4,
  },

  activeTabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#44216B",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    fontSize: 20,
    color: "#F7EAFF",
  },

  mainCard: {
    backgroundColor: "rgba(255,255,255,0.92)",
    marginHorizontal: 22,
    borderRadius: 28,
    padding: 22,

    shadowColor: "#6E00FF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 12,

    elevation: 10,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#5A2C87",
    marginBottom: 10,
  },

  totalValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#3E146E",
    marginBottom: 8,
  },

  profit: {
    fontSize: 22,
    color: "#2FB35A",
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "#E8DDF5",
    marginVertical: 22,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  legendContainer: {
    flex: 1,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  legendColor: {
    width: 18,
    height: 18,
    borderRadius: 5,
    marginRight: 10,
  },

  legendText: {
    fontSize: 19,
    color: "#4A2870",
    fontWeight: "600",
  },

  chartCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,

    backgroundColor: "#B15EFF",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#8A2EFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 8,
  },

  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",
  },

  chartText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6E00FF",
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5A2C87",
    marginTop: 28,
    marginBottom: 18,
    marginHorizontal: 22,
  },

  tipCard: {
    backgroundColor: "rgba(255,255,255,0.92)",

    marginHorizontal: 22,
    marginBottom: 18,

    borderRadius: 24,
    padding: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#6E00FF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,

    elevation: 6,
  },

  tipLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconBox: {
    width: 62,
    height: 62,
    borderRadius: 18,

    backgroundColor: "#F3E3FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  icon: {
    fontSize: 30,
  },

  tipTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A2870",
    marginBottom: 5,
  },

  tipDescription: {
    fontSize: 16,
    color: "#8165A0",
    width: 190,
  },

  tipProfit: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2FB35A",
  },

});