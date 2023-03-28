import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from '../page';

interface IProps {}

const Profile: NextPageWithLayout<IProps> = () => {
  return <section></section>;
};

export default Profile;

Profile.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
