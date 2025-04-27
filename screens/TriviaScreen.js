import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, ActivityIndicator } from 'react-native';

const TriviaScreen = () => {
  const [triviaData, setTriviaData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTrivia, setSelectedTrivia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const triviaPerPage = 10;
  const gistRawUrl = `https://gist.githubusercontent.com/Jun-04/626e2f9fa0544d5200692612b2163925/raw/3ec64b3a0e173cf4e168f58a92394954992abf8a/trivia.json`;

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(gistRawUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTriviaData(data);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
        setError('データの取得に失敗しました。');
      } finally {
        setLoading(false);
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

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(triviaData.length / triviaPerPage) - 1));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const currentTrivia = triviaData.slice(currentPage * triviaPerPage, (currentPage + 1) * triviaPerPage);
  const totalPages = Math.ceil(triviaData.length / triviaPerPage);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={currentTrivia}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={prevPage}
          disabled={currentPage === 0}
          style={[styles.paginationButton, currentPage === 0 && styles.disabledButton]}
        >
          <Text style={styles.paginationButtonText}>戻る</Text>
        </TouchableOpacity>
        <Text style={styles.pageNumber}>{currentPage + 1} / {totalPages}</Text>
        <TouchableOpacity
          onPress={nextPage}
          disabled={currentPage === totalPages - 1 || totalPages === 0}
          style={[styles.paginationButton, (currentPage === totalPages - 1 || totalPages === 0) && styles.disabledButton]}
        >
          <Text style={styles.paginationButtonText}>次へ</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  paginationButton: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  paginationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  pageNumber: {
    fontSize: 16,
  },
});

export default TriviaScreen;