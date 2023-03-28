import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from '../page';

interface IProps {}

const MyJobs: NextPageWithLayout<IProps> = () => {
  return <section></section>;
};

export default MyJobs;

MyJobs.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
