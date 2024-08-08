import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: NRs {product.price}</Text>
      <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
      <Button title="Buy Now with eSewa" onPress={() => navigation.navigate('Payment')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: '#888',
  },
  quantity: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
