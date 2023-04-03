import React, {useState, useEffect} from 'react';

import {WithSplashScreen} from './components/splash';

import IntroductionScreen from './screens/IntroductionScreen';
import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Introduction" component={IntroductionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WithSplashScreen>
  );
}
