import { createContext, PropsWithChildren, useEffect, useState } from 'react';

type TypeContext = [string, (theme: string) => void];

export const ThemeContext = createContext<TypeContext>(['light', () => {}]);

interface Props extends PropsWithChildren {}
const localData = localStorage.getItem('theme');

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState<string>(localData || 'light');

  const handleThemeValue = (themeValue: string) => {
    setTheme(themeValue);
    localStorage.setItem('theme', themeValue);

    if (localData === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (localData) {
      setTheme(localData);
    }
  }, []);

  return (
    <ThemeContext.Provider value={[theme, handleThemeValue]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
