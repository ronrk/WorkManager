import styles from './ProductsListFilters.module.css';

export interface IProductsListFilters {}

const ProductsListFilters: React.FC<IProductsListFilters> = () => {
  return (
    <div className={styles.contaier}>
      <h3>Filters</h3>
      <div>
        <label htmlFor="">Sort By</label>
        <button>clear</button>
      </div>
      <div className="filters">
        <h5>Brand</h5>
        <h5>Category</h5>
        <h5>Department</h5>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default ProductsListFilters;
