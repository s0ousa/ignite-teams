import { Text, View } from "react-native";
import { useTheme } from "src/contexts/ThemeContext";

type Props = {
    message: string
}

export const ListEmpty = ({ message }: Props) => {
    const theme = useTheme()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: "center", color: theme.COLORS.GRAY_300, fontSize: theme.FONT_SIZE.SM, fontFamily: theme.FONT_FAMILY.REGULAR }}>
                {message}
            </Text>
        </View>
    );
}