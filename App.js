import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const styles = StyleSheet.create({
  div: {
    backgroundColor: '#101010',
    minHeight: 1000,
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    padding: 20,
    backgroundColor: '#000',
  },
  tituloMenu: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    margin: 20,
  },
  card: {
    backgroundColor: '#444',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    display: 'flexBlock',
    width: 300,
  },
  item: {
    padding: 10,
    paddingLeft: 0,
    fontSize: 25,
    height: 44,
    color: '#fff',
  },
  imagem: {
    width: 100,
    height: 100,
  },
  btn: {
    color: '#fff',
    marginLeft: 10,
    padding: 7,
    fontSize: 18,
    backgroundColor: '#222222',
    borderRadius: 5,
    textAlign: 'center',
  },
});

const App = () => {
    return (
      <View style={styles.div}>
      <Text style={styles.menu}>
        <Text style={styles.tituloMenu}>One Punch Man</Text>
        {'\n'}{'\n'}
        <Text style={styles.btn}>Herois</Text>
        <Text style={styles.btn}>Monstros</Text>
        <Text style={styles.btn}>Classe S</Text>
      </Text>
      
        <Text style={styles.titulo}>Classe S</Text>
        <Text style={styles.section}>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>1.Blast</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>2.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>3.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>4.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>5.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>6.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>7.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>8.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>9.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>10.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>11.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>12.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>13.</Text>
        </Text>

        <Text style={styles.card}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          {'\n'}
          <Text style={styles.item}>14.</Text>
        </Text>
      </Text> 
    </View>
    );
};

export default App;