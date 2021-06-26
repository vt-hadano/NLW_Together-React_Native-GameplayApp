import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

import { useAuth } from "../../hooks/auth";

export function SignIn() {


  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();

    } catch (error) {
      Alert.alert(error);
    }
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
          {
            loading ?
            <ActivityIndicator
              color={theme.colors.primary}
            />
            :
            <ButtonIcon
              tittle='Entrar com Discord'
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}