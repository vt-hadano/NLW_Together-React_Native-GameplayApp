import React, { useState } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";

export function SignIn() {

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />
        <View style={styles.content}>
          <Text style={styles.tittle}>
            Conecte-se{`\n`}
            e organize suas{`\n`}
            jogatinas
          </Text>

          <Text style={styles.subTittle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            tittle='Entrar com Discord'
            onPress={handleSignIn}
          />

        </View>
      </View>
    </Background>
  );
}