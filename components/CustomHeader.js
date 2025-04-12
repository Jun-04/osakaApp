import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
        <Text style={styles.link}>Phrase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TriviaScreen')}>
        <Text style={styles.link}>Trivia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  link: {
    marginHorizontal: 6,
    fontSize: 14,
    color: '#007aff',
  },
});

export default CustomHeader;
