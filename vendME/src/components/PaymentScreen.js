import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Screen</Text>
      <Text style={styles.description}>Redirecting to eSewa...</Text>
      <Button title="Go Back" onPress={() => {/* Add navigation logic here */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
  },
});

export default PaymentScreen;
