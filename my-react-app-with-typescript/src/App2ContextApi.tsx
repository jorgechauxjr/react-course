import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

// 1.Crear el contexto
const ThemeContext = createContext<ThemeContextType>();


// 2.Implementar un proveedor
function ThemeProvider({ children }: {children: React.ReactNode}): React.ReactNode{
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
}

// 3. Consumir el contexto desde los componentes
// en este caso componente ThemeButton
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button 
        onClick={toggleTheme}
        style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
            color: theme === 'light' ? '#000000' : '#ffffff'
        }}
        >
        Cambiar tema a { theme==='light' ? 'Dark' : 'Light' }
        </button>
    );
}  

function App2ContextApi() {
    return (
        <>

        </>
    )
}

export default App
