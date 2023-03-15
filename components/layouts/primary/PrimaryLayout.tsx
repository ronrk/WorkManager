import Navbar from '@/components/navigation/navbar/Navbar';
import { store } from '@/store';
import Head from 'next/head';
import { Provider } from 'react-redux';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps}>
        <Navbar />
        <main>{children}</main>
      </div>
    </Provider>
  );
};

export default PrimaryLayout;
