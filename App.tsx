import Groups from '@screens/Groups';
import { ThemeProvider } from 'src/contexts/ThemeContext';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}