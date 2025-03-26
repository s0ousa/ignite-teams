import { Image, TouchableOpacity, View } from "react-native";
import logoImg from '@assets/Logo.png'
import { CaretLeft } from "phosphor-react-native";
import { useTheme } from "src/contexts/ThemeContext";

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    const theme = useTheme()

    return (
        <View style={{ width: '100%', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            {showBackButton &&
                <TouchableOpacity style={{ flex: 1 }}>
                    <CaretLeft size={32} color={theme.COLORS.WHITE} />
                </TouchableOpacity>
            }
            <Image style={{ width: 46, height: 55 }}
                source={logoImg}
            />
        </View>
    )

}