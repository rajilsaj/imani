import * as React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="bg-azure-400 h-full flex-1">
      <View className="p-5 mt-10 ">
        <KeyboardAvoidingView enabled>
          <View className="p-5 bg-bgform rounded-3xl">
            <View className="flex-auto flex-col  space-y-4">
              <Text className="text-center text-4xl font-poppinsMedium  text-white ">
                Inscription
              </Text>
              <TextInput
                className="rounded-full p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white font-poppinsLight"
                placeholder="Entrez un E-mail ou un Numéro de téléphone"
              />
              <TextInput
                className="rounded-full p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white font-poppinsLight"
                placeholder="Créer un Mot de passe"
                secureTextEntry={true}
              />
              <TextInput
                className="rounded-full p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white font-poppinsLight"
                placeholder="Confirmer le Mot de passe"
                secureTextEntry={true}
              />
              <TouchableOpacity
                className="
              rounded-full bg-blue-500 p-2 text-base mb-3 font-medium  transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                <Text className="text-center font-poppinsLight text-white text-2xl uppercase">
                  S'inscrire
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-2 mt-15 p-5">
              <TouchableOpacity
                className="
              rounded-full bg-bgbutton1 px-5 py-2 text-base mb-3 font-poppinsMedium  transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                <View className=" flex-2 justify-center flex-row  ">
                  <Image
                    source={require('../../assets/img/icons/gg.png')}
                    className="relative w-8 h-8 rounded-full align-middle flex-none"
                  />

                  <Text className="text-center font-poppinsMedium grow text-white text-lg">
                    Google
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="
              rounded-full bg-bgbutton1 px-5 py-2  text-base mb-3 font-poppinsMedium  transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                <View className=" flex-2 justify-center flex-row ">
                  <Image
                    source={require('../../assets/img/icons/fb.png')}
                    className="relative w-8 h-8 rounded-full align-middle flex-none"
                  />

                  <Text className="text-center font-poppinsMedium grow text-white text-lg">
                    Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-2 justify-center flex-row space-x-1 mt-2">
              <Text className="font-poppinsBold text-azure-900 text-lg">
                J'ai déjà un compte.
              </Text>
              <View className=" " />
              <Text className="text-white font-poppinsBold text-lg">
                Se connecter
              </Text>
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

export default RegisterScreen;
