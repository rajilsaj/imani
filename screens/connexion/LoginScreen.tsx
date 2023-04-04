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
          <View className="bg-bgform p-10  bg-slate-700/50 border border-slate-500/30 rounded-2xl">
            <Text className="text-center text-4xl	 text-white uppercase font-normal ">
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
