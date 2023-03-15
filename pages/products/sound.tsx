import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import ProductsNavigation from '@/components/navigation/productsNavigation/ProductsNavigation';

import { NextPageWithLayout } from '../page';

const SoundProducts: NextPageWithLayout = () => {
  return (
    <section>
      <ProductsNavigation />
    </section>
  );
};

export default SoundProducts;

SoundProducts.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
