import React from "react";
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import BannerImg from "../../assets/banner.png"
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {

    const members = [
        {
            id: '1',
            userName: 'Vt_Hadano',
            avatar_url: 'http://github.com/vt-hadano.png',
            status: 'online'
        },
        {
            id: '2',
            userName: 'DjangoWinnfield',
            avatar_url: 'https://github.com/emersonBarreiro.png',
            status: 'offline'
        },
        {
            id: '3',
            userName: 'GravetoGeek',
            avatar_url: 'https://github.com/GravetoGeek.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
                <Header
                    tittle="Detalhes"
                    action={
                        <BorderlessButton>
                            <Fontisto
                                name="share"
                                size={24}
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
                />
                <ImageBackground
                    source={BannerImg}
                    style={styles.banner}
                >
                    <View style={styles.bannerContent}>
                        <Text style={styles.tittle}>
                            Lendários
                        </Text>
                        <Text style={styles.subtittle}>
                            É hoje que vamos chegar ao challenger sem perder uma partida md10
                        </Text>
                    </View>
                </ImageBackground>
                <ListHeader
                    tittle="Jogadores"
                    subtittle="Total 3"
                />
                <FlatList
                    data={members}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Member data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.members}
                />
                <View style={styles.footer}>
                    <ButtonIcon tittle="Entrar na partida" />
                </View>
        </Background>
    )
}