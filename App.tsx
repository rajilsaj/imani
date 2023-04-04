import React, {useState, useEffect} from 'react';

import {WithSplashScreen} from './components/splash';

import IntroductionScreen from './screens/IntroductionScreen';
import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/connexion/LoginScreen';
import RegisterScreen from './screens/connexion/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Inscription"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Introduction"
            component={IntroductionScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WithSplashScreen>
  );
}
