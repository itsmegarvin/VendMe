import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Optional: Add an image for your splash screen if desired
// import logo from '../../assets/logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the main screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('ProductList'); // Navigate to the main screen
    }, 7000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Optional logo image */}
      {/* <Image source={logo} style={styles.logo} /> */}
      <Text style={styles.title}>vendMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#483d8b', // Example color
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
  // logo: {
  //   width: 150,
  //   height: 150,
  //   marginBottom: 20,
  // },
});

export default SplashScreen;
