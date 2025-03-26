import { useEffect, useState } from 'react';

interface Props {
  key: string;
  defData: string;
}

export const useLocalStorage = (props: Props) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(props.key);
    return localData || props.defData;
  });
  useEffect(() => {
    localStorage.setItem(props.key, state);
  }, [props.key, state]);

  return [state, setState] as const;
};
