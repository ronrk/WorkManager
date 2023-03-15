import { TProduct } from '@/types';
import styles from './SingleProductItem.module.css';

export interface ISingleProductItem {
  product: TProduct;
}

const SingleProductItem: React.FC<ISingleProductItem> = ({ product }) => {
  return (
    <tr className={styles.contaier}>
      <td>{product.name}</td>
      <td>{product.department}</td>
      <td>{product.subCategory}</td>
      <td>{product.brand}</td>
      <td>{product.quantity.total}</td>
      <td>{product.quantity.remain}</td>
      <td>I</td>
    </tr>
  );
};

export default SingleProductItem;
