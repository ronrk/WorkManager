import PrimaryLink from '@/components/utility/primaryLink/PrimaryLink';
import { navLists } from '@/types';
import styles from './Navbar.module.css';

export interface INavbar {}

const getNavListFromArray = (
  arr: {
    path: string;
    label: string;
  }[]
) => arr.map((item) => <PrimaryLink key={item.path} {...item} />);

const Navbar: React.FC<INavbar> = () => {
  let navLinks = getNavListFromArray(navLists.worker);

  return (
    <div className={styles.navbar + ' bg-gray-light'}>
      <ul className="flex">{navLinks}</ul>
    </div>
  );
};

export default Navbar;
