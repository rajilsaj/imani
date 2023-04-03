import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {WithSplashScreen} from './components/splash';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <View>
        <Text>Hello World Devs Branch !</Text>
      </View>
    </WithSplashScreen>
  );
}
