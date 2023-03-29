import PrimaryLink from '@/components/utility/primaryLink/PrimaryLink';
import { selectUserValue } from '@/store/slices/userSlice';
import { navLists } from '@/types';
import { useSelector } from 'react-redux';
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
  const { currentUser } = useSelector(selectUserValue);
  console.log(currentUser);

  return (
    <div className={styles.navbar + ' bg-gray-light flex jc-between'}>
      <div>
        {currentUser && (
          <h3 className="text-black fs-800">Hello, {currentUser.name}</h3>
        )}
      </div>
      <ul className="flex">{navLinks}</ul>
      <div>LOGO</div>
    </div>
  );
};

export default Navbar;
