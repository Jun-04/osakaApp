import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.png')} style={styles.profileImage} />

      <Text style={styles.title}>ALL ABOUT OSAKA</Text>

      <TouchableOpacity onPress={() => navigation.navigate('CardScreen')} style={styles.button}>
        <Text style={styles.buttonText}>OSAKA DIALECTS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TriviaScreen')} style={styles.button}>
        <Text style={styles.buttonText}>OSAKA TRIVIAS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingTop: 80 },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  button: {
    backgroundColor: '#007aff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '70%',
    maxwidth: '300px',
  },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
});

export default HomeScreen;
