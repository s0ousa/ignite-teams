import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';

export function Loading() {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.COLORS.GRAY_600 }}>
            <ActivityIndicator
                color={theme.COLORS.GREEN_700}
                size="large"
            />
        </View>
    );
}


