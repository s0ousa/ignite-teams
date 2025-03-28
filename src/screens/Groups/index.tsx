import { Header } from '@components/Header';
import { View } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';

export default function Groups() {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: theme.COLORS.GRAY_600 }}>
            <Header />
        </View>
    );
}