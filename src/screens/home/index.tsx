import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";


export function Home() {

    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointment = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Gamers',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'DnD',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '4',
            guild: {
                id: '4',
                name: 'WeebNation',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '5',
            guild: {
                id: '5',
                name: 'Otakus4Life',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '6',
            guild: {
                id: '6',
                name: 'Memes everywhere',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje vamos chegar ao challenger sem perder uma partida md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />

            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader
                tittle="Partidas agendadas"
                subtittle="Total 6"
            />
            <FlatList
                data={appointment}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    );
}