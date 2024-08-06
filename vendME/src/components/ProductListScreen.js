import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Sample data for products
const products = [
  { id: '1', name: 'Chips', price: 50, quantity: 10, image: require('../../assets/chips.jpg') },
  { id: '2', name: 'Soda', price: 70, quantity: 5, image: require('../../assets/soda.jpeg') },
  { id: '3', name: 'Chocolate', price: 100, quantity: 7, image: require('../../assets/chocolate.jpg') },
  { id: '4', name: 'Cookies', price: 250, quantity: 8, image: require('../../assets/cookies.jpeg') },
];

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>Price: Rs {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{marginTop:10, fontSize:24}} >Product List</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Static column count
        columnWrapperStyle={styles.row} // Style for the rows
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
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
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default ProductListScreen;
