import React from "react";
import {
    View,
    FlatList
} from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg',
            owner: true
        },
        
        {
            id: '2',
            name: 'NLW',
            icon: 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg',
            owner: true
        }
    ]

    return (
        <View>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} 
                        onPress={() => handleGuildSelect(item)}
                    />

                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    );

}