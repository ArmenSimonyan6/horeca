import { Icon, Switch } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FC, useContext, useId } from 'react';
import { ThemeContext } from 'theme/ThemeProvider';

const ThemeButton:FC = () => {
  interface ChangeFunctions {
    changeTheme: () => void;
  }
  type TypeTheme = Pick<ChangeFunctions, 'changeTheme'>;

  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme: TypeTheme['changeTheme'] = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch.Root colorPalette="cyan" size="lg">
      <Switch.HiddenInput onClick={changeTheme} />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};

export default ThemeButton;
