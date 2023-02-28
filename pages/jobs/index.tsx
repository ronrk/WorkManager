import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from '../page';

const Jobs: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36"></section>
  );
};

export default Jobs;

Jobs.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
