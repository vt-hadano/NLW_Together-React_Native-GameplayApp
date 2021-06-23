import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
    Text,
    Image,
    View
} from "react-native";

import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";

type Props = RectButtonProps & {
    tittle: string;
}

export function ButtonIcon({ tittle, ...rest}: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWraper}>
                <Image resizeMode='stretch' source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.tittle}>
                {tittle}
            </Text>
        </RectButton>
    );
}