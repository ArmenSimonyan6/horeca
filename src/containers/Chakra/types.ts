interface ChangeFunctions {
  changeTheme: () => void;
}
export type TypeTheme = Pick<ChangeFunctions, 'changeTheme'>;
