import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView className="bg-azure-400 h-full">
      <View>
        <Text className="text-center mt-5 text-white">
          This is the login screen of my application
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
