import * as React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const IntroductionScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>You are on the Introduction Page</Text>
        <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroductionScreen;
