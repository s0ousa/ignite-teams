import { Button } from '@components/Button';
import GroupCard from '@components/Groupcard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty/ListEmpty';
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';

export default function Groups() {
    const theme = useTheme();
    const [groups, setGroups] = useState([])

    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: theme.COLORS.GRAY_600 }}>
            <Header />
            <Highlight title={'Turmas'} subtitle={'Jogue com a sua turma'} />

            <FlatList
                ListEmptyComponent={() => <ListEmpty message='Que tal cadastar a primeira turma?' />}
                data={groups}
                keyExtractor={item => item}
                renderItem={
                    ({ item }) => <GroupCard title={item} />
                }
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
            />

            <Button title='Olá' />
        </View>
    );
}