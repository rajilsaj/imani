import * as React from 'react';
import IntroCarousel from '../components/carousel';
import {StyleSheet, View} from 'react-native';

const IntroductionScreen = () => {
  return (
    <View style={styles.container}>
      <IntroCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IntroductionScreen;
