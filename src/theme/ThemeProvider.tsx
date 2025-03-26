import { createContext, PropsWithChildren, useEffect } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

type TypeContext = [string, (theme: string) => void];

export const ThemeContext = createContext<TypeContext>(['light', () => {}]);

interface Props extends PropsWithChildren {}

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
