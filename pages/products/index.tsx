import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import ProductsNavigation from '@/components/navigation/productsNavigation/ProductsNavigation';
import ProductsList from '@/components/surfaces/productsList/ProductsList';
import { DUMMY_Light_PRODUCTS, DUMMY_SOUND_PRODUCTS, TProduct } from '@/types';
import { GetStaticProps } from 'next';

import { NextPageWithLayout } from '../page';

interface IProps {
  products: TProduct[];
}

const Products: NextPageWithLayout<IProps> = ({ products }) => {
  return (
    <section>
      <ProductsNavigation />
      <ProductsList products={products} />
    </section>
  );
};

export default Products;

Products.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const props: IProps = {
    products: [...DUMMY_SOUND_PRODUCTS, ...DUMMY_Light_PRODUCTS],
  };
  return {
    props,
  };
};
