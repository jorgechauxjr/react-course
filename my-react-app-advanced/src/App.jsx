import CounterAdvanced from "./components/CounterAdvanced/CounterAdvanced"
import CounterWithCustomHook from "./components/CounterWithCustomHook/CounterWithCustomHook";
import { createContext, useContext, useState } from 'react';


// 1.Crear el contexto
const ThemeContext = createContext();


// 2.Implementar un proveedor
function ThemeProvider({ children }) {
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

function App() {
  return (
    <>
      {/* <CounterAdvanced /> */}
      {/* <ThemeProvider>
        <ThemeButton /> */}
        {/* Otros componentes */}
    {/* </ThemeProvider> */}
    <CounterWithCustomHook />
    </>
  )
}

export default App
