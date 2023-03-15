import { selectUserValue } from '@/store/slices/userSlice';
import { navLists, Role } from '@/types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

export interface INavbar {}

const getNavListFromArray = (
  arr: {
    path: string;
    label: string;
  }[]
) =>
  arr.map((item) => (
    <li key={item.path}>
      <Link href={item.path}>{item.label}</Link>
    </li>
  ));

const Navbar: React.FC<INavbar> = () => {
  const { currentUser } = useSelector(selectUserValue);
  let navLinks;
  if (currentUser?.role === Role.ADMIN || currentUser?.role === Role.OWNER) {
    navLinks = getNavListFromArray(navLists.admin);
  }
  if (currentUser?.role === Role.CREW_MANAGER) {
    navLinks = getNavListFromArray(navLists.manager);
  }
  if (currentUser?.role === Role.WORKER) {
    navLinks = getNavListFromArray(navLists.worker);
  }

  return (
    <div className={styles.contaier}>
      <ul>{navLinks}</ul>
    </div>
  );
};

export default Navbar;
