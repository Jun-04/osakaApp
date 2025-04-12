import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const trivia = [

  {
    title: "Kuidaore no Machi",
    content:
      "Osaka is known as 'The City of Eating Until You Drop' because people would spend all their money on delicious food.",
  },
  {
    title: "Maido! - A Versatile Greeting",
    content:
      "'Maido!' is a casual greeting from Osaka merchants, meaning 'Thanks always!' and used as a friendly way to welcome people.",
  },
  {
    title: "Shortest National Highway",
    content:
      "National Route 174 in Osaka is only 187.1 meters long – the shortest national highway in Japan.",
  },
  {
    title: "Chau nen!",
    content:
      "This phrase means 'That’s not it!' or 'You’re wrong!' but it’s often playful and humorous.",
  },
  {
    title: "Takoyaki Maker in Every Home",
    content:
      "Most Osaka homes have a takoyaki maker – it's a staple for family meals and gatherings.",
  },
  {
    title: "Ame-chan Culture",
    content:
      "Obachan (aunties) in Osaka carry candy ('ame-chan') and give them to start conversations or show kindness.",
  },
  {
    title: "Okonomiyaki + Rice?!",
    content:
      "In Osaka, okonomiyaki is often eaten as a side dish – yes, with rice!",
  },
  {
    title: "Nande ya nen!",
    content:
      "A classic Kansai retort meaning 'What are you saying?!' – often used in comedy and daily conversation.",
  },
  {
    title: "Tsutenkaku Tower 2.0",
    content:
      "The current Tsutenkaku Tower was rebuilt in 1956 after the original was dismantled during WWII.",
  },
  {
    title: "Namba Grand Kagetsu",
    content:
      "This theater is Osaka’s comedy central – home to Yoshimoto comedians and famous manzai acts.",
  },
  ];

  
const TriviaScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const handlePress = (item) => {
    setSelected(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={trivia}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>{selected?.title}</Text>
          <Text style={styles.modalContent}>{selected?.content}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>閉じる</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 18 },
  modal: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold' },
  modalContent: { fontSize: 18, marginTop: 10 },
  close: { marginTop: 30, color: 'blue', fontSize: 16 },
});

export default TriviaScreen;
