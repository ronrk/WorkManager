import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import ProductsNavigation from '@/components/navigation/productsNavigation/ProductsNavigation';

import { NextPageWithLayout } from '../page';

const LightProdcuts: NextPageWithLayout = () => {
  return (
    <section>
      <ProductsNavigation />
    </section>
  );
};

export default LightProdcuts;

LightProdcuts.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
