import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ActivityIndicator } from 'react-native';
 

const { width } = Dimensions.get('window');
const cardMinWidth = Math.min(width * 0.8, 400);
const GIT_HUB_API_URL = `https://gist.githubusercontent.com/Jun-04/242b51e0c6bc2e0208f52e50d647be70/raw/3e2f3fcb6907782bb3721b7cc36bacc8391a7ee4/phrases.json`;

const CardScreen = () => {
  const [phrases, setPhrases] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true); // show loding during fetching API data.
  const [error, setError] = useState(null); // if fail it, show this.

useEffect(() => {
  const fetchData = async()=>{
    setLoading(true);
    setError(null);
try {
  const response = await fetch(GIT_HUB_API_URL);
  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  setPhrases(data);
} catch (e) {
  setError(e.message);
} finally{
  setLoading(false);
}
};
fetchData();
},
[]);

const nextCard = () => {
  if (phrases.length > 0) {
    setIndex((index + 1) % phrases.length);
  }
};

const prevCard = () => {
  if (phrases.length > 0) {
    setIndex((index - 1 + phrases.length) % phrases.length);
  }
};

if (loading) {
  return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>;
}

if (error) {
  return <View style={styles.errorContainer}><Text>Error: {error}</Text></View>;
}

return (
  <View style={styles.container}>
    {phrases.length > 0 ? (
      <View style={styles.card}>
        <Text style={styles.osaka}>{phrases[index].osaka}</Text>
        <Text style={styles.osakaRomaji}>{phrases[index].osaka_romaji}</Text>
        <Text style={styles.japanese}>{phrases[index].japanese}</Text>
        <Text style={styles.romaji}>{phrases[index].romaji}</Text>
        <Text style={styles.english}>{phrases[index].english}</Text>
      </View>
    ) : (
      <Text>No phrases data available.</Text>
    )}
    <View style={styles.nav}>
      <Button title="←" onPress={prevCard} disabled={phrases.length === 0} />
      <Button title="→" onPress={nextCard} disabled={phrases.length === 0} />
    </View>
  </View>
);
};

  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }, 
    card: {
      minWidth: cardMinWidth, 
      padding: 30,
      backgroundColor: '#fff', 
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, 
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