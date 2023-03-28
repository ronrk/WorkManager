import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from '../page';

interface IProps {}

const Updates: NextPageWithLayout<IProps> = () => {
  return <section></section>;
};

export default Updates;

Updates.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
