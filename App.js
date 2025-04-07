import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      Poppins_400Regular,
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Catálogo Vans Escolares:</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://dcdn-us.mitiendanube.com/stores/001/049/812/products/043710943a16b6f4a2d8e7808ff89e29-e258143250439fe2d717104407088539-480-0.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Jão da Van</Text>
          <Text style={styles.info}>Rota: São Sebastião ➜ W3 Norte</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐⭐☆</Text>
          <Text style={styles.info}>Capacidade: 15 alunos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://mid-noticias.curitiba.pr.gov.br/2025/capa/00474135.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Tia Cida</Text>
          <Text style={styles.info}>Rota: Itapoã ➜ Asa Sul</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐⭐⭐</Text>
          <Text style={styles.info}>Capacidade: 24 alunos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvDGBbwQikDy4qeLaDEflBsQcpYMOul3Dkw&s' }}
            style={styles.image}
          />
          <Text style={styles.title}>Zé da Kombi</Text>
          <Text style={styles.info}>Rota: Paranoá ➜ Setor Comercial Sul</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐☆☆</Text>
          <Text style={styles.info}>Capacidade: 10 alunos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://static.vakinha.com.br/uploads/vakinha/image/2082871/fiat_ducato.png?ims=700x410' }}
            style={styles.image}
          />
          <Text style={styles.title}>Mauricin da Van</Text>
          <Text style={styles.info}>Rota: São Sebastião ➜ Lago Sul</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐⭐☆</Text>
          <Text style={styles.info}>Capacidade: 14 alunos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.divelp.com.br/wp-content/uploads/2020/06/Transporte-escolar-na-pande.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Dona Neide</Text>
          <Text style={styles.info}>Rota: Jardim Botânico ➜ Asa Norte</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐⭐☆</Text>
          <Text style={styles.info}>Capacidade: 16 alunos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://lh6.googleusercontent.com/proxy/55N1i2XarOGcdtv40UbowXgNdt8c_Wgy5G9nK7C1ndwf5Ow6406zmK935-NXOC0jg1esAgq_4nQUy40P' }}
            style={styles.image}
          />
          <Text style={styles.title}>Tio Nando</Text>
          <Text style={styles.info}>Rota: São Sebastião ➜ UNB</Text>
          <Text style={styles.info}>Avaliação: ⭐⭐⭐⭐☆</Text>
          <Text style={styles.info}>Capacidade: 13 alunos</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fefefe',
  },
  header: {
    fontSize: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    color: '#444',
  },
  info: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginTop: 4,
    color: '#555',
  },
});