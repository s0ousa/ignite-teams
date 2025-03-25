import Groups from '@screens/Groups';
import { ThemeProvider } from 'src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Groups />
    </ThemeProvider>
  );
}
