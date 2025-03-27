interface Props {
  key: string;
  defData: string;
}

export const useLocalStorage = (props: Props) => {
  const localData = localStorage.getItem(props.key) || 'light';

  const handleChangeTheme = (theme: string) => {
    localStorage.setItem(props.key, theme);
  };

  return [localData, handleChangeTheme] as const;
};
