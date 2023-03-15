import ProductsListFilters from '@/components/cards/productsListFilters/ProductsListFilters';
import SingleProductItem from '@/components/cards/singleProductItem/SingleProductItem';
import { TProduct } from '@/types';
import styles from './ProductsList.module.css';

export interface IProductsList {
  products: TProduct[];
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
  const productsBrands = new Set(products.map((product) => product.brand));
  const productsCategory = new Set(
    products.map((product) => product.subCategory)
  );
  const productsDepartment = new Set(
    products.map((product) => product.department)
  );

  console.log({ productsBrands, productsCategory, productsDepartment });
  return (
    <div className={styles.container}>
      <table className={styles.products}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Department</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Total</th>
            <th>Available</th>
            <th>(I)</th>
          </tr>
        </thead>
        <tbody>
          {products
            .sort((a, b) => (a.subCategory === b.subCategory ? 1 : -1))
            .map((product) => (
              <SingleProductItem key={product.name} product={product} />
            ))}
        </tbody>
      </table>

      <ProductsListFilters />
    </div>
  );
};

export default ProductsList;
