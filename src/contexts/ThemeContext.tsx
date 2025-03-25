import React, { createContext, useContext } from 'react';

interface ThemeContextData {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme: Theme = {
        COLORS: {
            WHITE: '#FFFFFF',
            GREEN_700: '#00875F',
            GREEN_500: '#00B37E',
            RED: '#F75A68',
            RED_DARK: '#AA2834',
            GRAY_700: '#121214',
            GRAY_600: '#202024',
            GRAY_500: '#29292E',
            GRAY_400: '#323238',
            GRAY_300: '#7C7C8A',
            GRAY_200: '#C4C4CC',
            GRAY_100: '#E1E1E6'
        },
        FONT_FAMILY: {
            REGULAR: 'Roboto_400Regular',
            BOLD: 'Roboto_700Bold'
        },
        FONT_SIZE: {
            SM: 14,
            MD: 16,
            LG: 18,
            XL: 24
        }
    };

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): Theme => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context.theme;
};

interface Theme {
    COLORS: {
        WHITE: string;
        GREEN_700: string;
        GREEN_500: string;
        RED: string;
        RED_DARK: string;
        GRAY_700: string;
        GRAY_600: string;
        GRAY_500: string;
        GRAY_400: string;
        GRAY_300: string;
        GRAY_200: string;
        GRAY_100: string;
    };
    FONT_FAMILY: {
        REGULAR: string;
        BOLD: string;
    };
    FONT_SIZE: {
        SM: number;
        MD: number;
        LG: number;
        XL: number;
    };
}