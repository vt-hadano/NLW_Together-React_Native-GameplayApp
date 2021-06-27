import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
    ImageBackground,
    Text,
    View,
    FlatList,
    Alert,
    Platform,
    Share
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Linking from 'expo-linking';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { AppointmentProps } from "../../components/Appointment";
import { Load } from "../../components/Load";

import BannerImg from "../../assets/banner.png"
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string,
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails() {

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);
    const [disabledWidget, setDisabledWidget] = useState(false);

    const route = useRoute();

    const { guildSelected } = route.params as Params;

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            setLoading(false);

        } catch {
            Alert.alert('Verifique as configurções do servidor. O Widget pode não estar habilitado')

            setDisabledWidget(true);
        }
        finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        try {
            const message = Platform.OS === 'ios'
                ? `Junte-se a ${guildSelected.guild.name}`
                : widget.instant_invite;

            Share.share({
                message,
                url: widget.instant_invite
            });
        } catch {
            Alert.alert('Link de compartilhamento indisponível');
        }
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    return (
        <Background>
            <Header
                tittle="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvitation}>
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
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtittle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Load /> :
                    disabledWidget ?
                        <View style={styles.emptyList} />
                        :
                        <>
                            <ListHeader
                                tittle="Jogadores"
                                subtittle={`Total ${widget.members.length}`}
                            />
                            <FlatList
                                data={widget.members}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <Member data={item} />
                                )}
                                ItemSeparatorComponent={() => <ListDivider isCentered />}
                                style={styles.members}
                            />
                        </>
            }
            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon tittle="Entrar na partida" onPress={handleOpenGuild} />
                </View>
            }
        </Background>
    )
}