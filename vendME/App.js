import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './src/components/ProductListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import PaymentScreen from './src/components/PaymentScreen';
import SplashScreen from './src/components/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hiding header for Splash screen
        />
        <Stack.Screen 
          name="ProductList" 
          component={ProductListScreen}
          options={{ 
            title: 'Product List', 
            headerStyle: { backgroundColor: '#1e90ff' }
          }} // Showing header with a title
        />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen}
          options={{ title: 'Product Detail' }}
        />
        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen}
          options={{ title: 'Payment' }}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
  
};

export default App;
