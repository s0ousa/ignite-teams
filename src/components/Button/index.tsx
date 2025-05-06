import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "src/contexts/ThemeContext";

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps,
    title: string
}

export const Button = ({ title, type = 'primary', ...rest }: Props) => {
    const theme = useTheme()

    return (
        <TouchableOpacity
            style={{
                flex: 1,
                minHeight: 56,
                maxHeight: 56,
                backgroundColor: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center"
            }}
            {...rest}
        >
            <Text style={{ color: theme.COLORS.WHITE, fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.BOLD }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}