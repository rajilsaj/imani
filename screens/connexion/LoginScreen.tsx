import * as React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView className="bg-azure-400 h-full flex-1">
      <View className="p-5 mt-20 ">
        <KeyboardAvoidingView enabled>
          <View className="p-10  bg-bgform rounded-3xl">
            <Text className="text-center text-4xl font-poppinsMedium	 text-white uppercase  ">
              Connexion
            </Text>
            <TextInput placeholder="Entrer votre Email" />
            <TextInput placeholder="Entrer votre Mot de Passe" />
            <TouchableOpacity>
              <Text>LOGIN</Text>
            </TouchableOpacity>
            <Text>New Here ? Register</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
