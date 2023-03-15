import Link from 'next/link';
import styles from './ProductsNavigation.module.css';

export interface IProductsNavigation {}

const ProductsNavigation: React.FC<IProductsNavigation> = () => {
  return (
    <div className={styles.contaier}>
      <Link href="/products/sound">Sound</Link>
      <Link href="/products/light">Light</Link>
    </div>
  );
};

export default ProductsNavigation;
