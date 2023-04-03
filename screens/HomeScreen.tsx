import * as React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>You are on the Home page</Text>
        <Button
          title="Introduction"
          onPress={() => navigation.navigate('Introduction')}
        />
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

export default HomeScreen;
