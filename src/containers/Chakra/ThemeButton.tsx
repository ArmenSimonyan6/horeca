import { Icon, Switch } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FC, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeProvider';

const ThemeButton: FC = () => {
  const [theme, handleChangeTheme] = useContext(ThemeContext);

  return (
    <>
      <Switch.Root
        colorPalette="cyan"
        size="lg"
        checked={theme === 'light'}
        onCheckedChange={(e) => {
          if (e.checked) {
            handleChangeTheme('light');
          } else {
            handleChangeTheme('dark');
          }
        }}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
      </Switch.Root>
    </>
  );
};

export default ThemeButton;
