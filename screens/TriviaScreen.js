import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const TriviaScreen = () => {
  const [triviaData, setTriviaData] = useState([]); //this useState is for stoering trivia data via API (^^)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTrivia, setSelectedTrivia] = useState(null);
  const gistRawUrl = `https://gist.githubusercontent.com/Jun-04/626e2f9fa0544d5200692612b2163925/raw/3ec64b3a0e173cf4e168f58a92394954992abf8a/trivia.json`;
  //I use this json data from my github
  useEffect(() => {
    const fetchTrivia = async()=>{
      try {
        const response = await fetch(gistRawUrl);
        const data = await response.json();
        setTriviaData(data);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };
    fetchTrivia();
  }, []);
  

  const handlePress = (item) => {
    setSelectedTrivia(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={triviaData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType="fade" // アニメーションタイプをfadeまたはslideに変更
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedTrivia?.title}</Text>
            <Text style={styles.modalContent}>{selectedTrivia?.content}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 18 },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%', 
    maxWidth: 400,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  modalContent: { fontSize: 18, marginTop: 10, textAlign: 'center' },
  closeButton: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default TriviaScreen;