import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const products = [
  { id: '1', name: 'Chips', price: 50, quantity: 1, image: require('../../assets/chips.jpg') },
  { id: '2', name: 'Soda', price: 60, quantity: 1, image: require('../../assets/soda.jpeg') },
  { id: '3', name: 'Chocolate', price: 100, quantity: 1, image: require('../../assets/chocolate.jpg') },
  { id: '4', name: 'Cookies', price: 250, quantity: 1, image: require('../../assets/cookies.jpeg') },
];

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
