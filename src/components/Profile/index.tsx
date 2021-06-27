import React from "react";
import { View, Text, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

export function Profile() {

    const { user, signOut } = useAuth();

    function handleSingOut() {
        Alert.alert('Logout', 'Deseja Sair do Gameplay', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => signOut()
            }
        ])
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleSingOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.userName}>{user.firstName}</Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}