import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';

export default function Groups() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.COLORS.GRAY_200,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Groups</Text>
        </View>
    );
}


