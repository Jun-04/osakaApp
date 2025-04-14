import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // 画面幅を取得

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20, // 左右に余白を追加
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center', // タイトルを中央揃え
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 15, // 上下のpadding
    paddingHorizontal: 20, // 左右のpadding
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', // 親要素いっぱいに広げる
    maxWidth: 300, // 最大幅を制限
    alignItems: 'center', // ボタン内のテキストを中央揃え
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HomeScreen;