import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    tittle: string;
    subtittle: string;
}

export function ListHeader({ tittle, subtittle }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                {tittle}
            </Text>
            <Text style={styles.subtittle}>
                {subtittle}
            </Text>
        </View>
    )
}