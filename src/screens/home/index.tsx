import React, { useState, useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Load } from "../../components/Load";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";


export function Home() {

    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        }
        else {
            setAppointments(storage.filter(item => item.category != ''));
        }
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />

            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>
            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            tittle="Partidas agendadas"
                            subtittle={`Total ${appointments.length}`}
                        />
                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    );
}