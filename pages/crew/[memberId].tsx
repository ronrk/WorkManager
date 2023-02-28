import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from '../page';

const CrewMemeber: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36"></section>
  );
};

export default CrewMemeber;

CrewMemeber.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
