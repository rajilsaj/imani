import React from 'react';
import {TextInput, View} from 'react-native';

const ReinitPwdScreen = () => {
  return (
    <View>
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
    </View>
  );
};

export default ReinitPwdScreen;
