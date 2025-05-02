import { UsersThree } from 'phosphor-react-native';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'src/contexts/ThemeContext';

type Props = TouchableOpacityProps & {
    title: string,
}

export default function GroupCard({ title, ...rest }: Props) {
    const theme = useTheme();

    return (
        <TouchableOpacity {...rest} style={{
            width: '100%',
            height: 90,
            backgroundColor: theme.COLORS.GRAY_500,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 24,
            marginBottom: 12,
            gap: 20
        }}>
            <UsersThree size={32} color={theme.COLORS.GREEN_700} weight='fill' />
            <Text style={{ fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.REGULAR, color: theme.COLORS.GRAY_200 }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}