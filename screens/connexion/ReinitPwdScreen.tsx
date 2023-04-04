import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ReinitPwdScreen = () => {
  return (
    <SafeAreaView className="bg-azure-400 h-full flex-1">
      <View className="p-5 mt-10 ">
        <KeyboardAvoidingView enabled>
          <View className="p-5 bg-bgform rounded-3xl">
            <View className="flex-auto flex-col  space-y-4">
              <Text className="text-center text-3xl font-poppinsMedium  text-white ">
                Réinitialisation
              </Text>

              <TextInput
                className="rounded-full p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white font-poppinsLight"
                placeholder="Nouveau Mot de passe"
                secureTextEntry={true}
              />
              <TextInput
                className="rounded-full p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white font-poppinsLight"
                placeholder="Confirmer le Mot de passe"
                secureTextEntry={true}
              />
              <View className="flex-2 justify-around flex-row">
                <TouchableOpacity
                  className="
              rounded-full bg-bgbutton1 px-5 py-2  text-base mb-3 font-medium  transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                  <Text className="text-center font-poppinsMedium grow text-white text-lg">
                    Envoyer
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="
              rounded-full bg-bgbutton1  px-5 py-2  text-base mb-3 font-medium  transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                  <Text className="text-center font-poppinsMedium grow text-white text-lg">
                    Annuler
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      <View className="flex-1 relative items-center justify-center ">
        <Image
          source={require('../../assets/img/screens/connexion/imani-bg-1.png')}
          className="object-cover h-22 w-22 bottom-5"
        />
      </View>
    </SafeAreaView>
  );
};

export default ReinitPwdScreen;
