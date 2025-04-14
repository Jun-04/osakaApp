import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardMinWidth = Math.min(width * 0.8, 400); // 画面幅の80%か最大400px

const CardScreen = () => {
  const [index, setIndex] = useState(0);

  const phrases = [
    { osaka: "おおきに", osaka_romaji: "ookini", japanese: "ありがとう", romaji: "arigatou", english: "Thank you" },
    { osaka: "なんでやねん", osaka_romaji: "nande ya nen", japanese: "どうしてだよ", romaji: "doushite dayo", english: "Why the heck!?" },
    { osaka: "ほんま？", osaka_romaji: "honma?", japanese: "本当？", romaji: "hontou?", english: "Really?" },
    { osaka: "めっちゃうまい", osaka_romaji: "meccha umai", japanese: "とても美味しい", romaji: "totemo oishii", english: "Super tasty" },
    { osaka: "あかん", osaka_romaji: "akan", japanese: "ダメ", romaji: "dame", english: "No good" },
    { osaka: "かなんわ〜", osaka_romaji: "kananwa~", japanese: "困るよ〜", romaji: "komaru yo~", english: "That's troublesome" },
    { osaka: "いてまうで", osaka_romaji: "itemau de", japanese: "殴っちゃうぞ", romaji: "nagucchau zo", english: "I'll punch you!" },
    { osaka: "せやな", osaka_romaji: "seyana", japanese: "そうだね", romaji: "sou da ne", english: "That's right" },
    { osaka: "なんぼ？", osaka_romaji: "nanbo?", japanese: "いくら？", romaji: "ikura?", english: "How much?" },
    { osaka: "ちゃうちゃう", osaka_romaji: "chau chau", japanese: "違う違う", romaji: "chigau chigau", english: "No no, that's wrong" },
    { osaka: "はよしてや", osaka_romaji: "hayoshite ya", japanese: "早くして", romaji: "hayaku shite", english: "Hurry up" },
    { osaka: "しんどいわ〜", osaka_romaji: "shindoi wa~", japanese: "疲れた〜", romaji: "tsukareta~", english: "I'm exhausted" },
    { osaka: "おもろいな〜", osaka_romaji: "omoroi na~", japanese: "面白いね", romaji: "omoshiroi ne", english: "That's funny" },
    { osaka: "いけるやん！", osaka_romaji: "ikeru yan!", japanese: "できるじゃん！", romaji: "dekiru jan!", english: "You can do it!" },
    { osaka: "どないしたん？", osaka_romaji: "donai shitan?", japanese: "どうしたの？", romaji: "dou shitan?", english: "What happened?" },
    { osaka: "しゃあないなぁ", osaka_romaji: "shaanai naa", japanese: "仕方ないなぁ", romaji: "shikatanai naa", english: "Can't be helped" },
    { osaka: "まいど〜", osaka_romaji: "maido~", japanese: "いらっしゃいませ", romaji: "irasshaimase", english: "Welcome!" },
    { osaka: "いらん", osaka_romaji: "iran", japanese: "いらない", romaji: "iranai", english: "I don't need it" },
    { osaka: "よう言わんわ", osaka_romaji: "you iwan wa", japanese: "よく言えるね", romaji: "yoku ieru ne", english: "I can't believe you said that" },
    { osaka: "いてこますぞ", osaka_romaji: "itekomasu zo", japanese: "懲らしめてやるぞ", romaji: "korashimete yaru zo", english: "I'll beat you up" },  ];


    const nextCard = () => {
      setIndex((index + 1) % phrases.length);
    };

    const prevCard = () => {
      setIndex((index - 1 + phrases.length) % phrases.length);
    };

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.osaka}>{phrases[index].osaka}</Text>
          <Text style={styles.osakaRomaji}>{phrases[index].osaka_romaji}</Text>
          <Text style={styles.japanese}>{phrases[index].japanese}</Text>
          <Text style={styles.romaji}>{phrases[index].romaji}</Text>
          <Text style={styles.english}>{phrases[index].english}</Text>
        </View>
        <View style={styles.nav}>
          <Button title="←" onPress={prevCard} />
          <Button title="→" onPress={nextCard} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }, // 背景色を少しグレーに
    card: {
      minWidth: cardMinWidth, // 最小幅を設定
      padding: 30,
      backgroundColor: '#fff', // 背景色を白に
      borderRadius: 10,
      alignItems: 'center',
      // ボックスシャドウ
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, // Android用
    },
    osaka: { fontSize: 28, fontWeight: 'bold', color: '#333' },
    osakaRomaji: { fontSize: 18, fontStyle: 'italic', color: '#777', marginTop: 4 },
    japanese: { fontSize: 24, marginTop: 16, color: '#333' },
    romaji: { fontSize: 18, fontStyle: 'italic', marginTop: 4, color: '#777' },
    english: { fontSize: 20, marginTop: 10, color: '#333' },
    nav: {
      flexDirection: 'row',
      marginTop: 30,
      width: '60%',
      justifyContent: 'space-between',
    },
  });

  export default CardScreen;