import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";
import { styles } from "./styles";

type Props = RectButtonProps & {
    tittle: string;
}

export function Button({ tittle, ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.tittle}>
                {tittle}
            </Text>
        </RectButton>
    );
}