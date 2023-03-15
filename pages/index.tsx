import { selectUserValue } from '@/store/slices/userSlice';
import { useSelector } from 'react-redux';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { currentUser } = useSelector(selectUserValue);
  console.log(currentUser);
  return <section></section>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
