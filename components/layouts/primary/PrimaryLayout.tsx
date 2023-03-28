import Navbar from '@/components/navigation/navbar/Navbar';
import Sidebar from '@/components/navigation/sidebar/Sidebar';
import { store } from '@/store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={styles.container}>
        <Navbar />
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </Provider>
  );
};

export default PrimaryLayout;
