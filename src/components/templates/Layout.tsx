import { PropsWithChildren } from 'react';
import { Header } from 'components/views';

interface Props extends PropsWithChildren {}

const Layout = (props: Props) => {

  return (
    <>
      <Header/>
    </>
  );
};

export default Layout;
