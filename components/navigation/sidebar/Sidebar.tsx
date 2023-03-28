import PrimaryLink from '@/components/utility/primaryLink/PrimaryLink';
import { selectUserValue } from '@/store/slices/userSlice';
import { Role, sideBarLists } from '@/types';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.css';

export interface ISidebar {}

const getNavListFromArray = (
  arr: {
    path: string;
    label: string;
  }[]
) =>
  arr.map((item) => (
    <PrimaryLink key={item.path} path={item.path} label={item.label} />
  ));

const Sidebar: React.FC<ISidebar> = () => {
  const { currentUser } = useSelector(selectUserValue);
  let navLinks;
  if (currentUser?.role === Role.ADMIN || currentUser?.role === Role.OWNER) {
    navLinks = getNavListFromArray(sideBarLists.admin);
  }
  if (currentUser?.role === Role.CREW_MANAGER) {
    navLinks = getNavListFromArray(sideBarLists.manager);
  }
  if (currentUser?.role === Role.WORKER) {
    navLinks = getNavListFromArray(sideBarLists.worker);
  }

  return (
    <div className={styles.sidebar + ' bg-gray-light'}>
      <ul className="flex-col">{navLinks}</ul>
    </div>
  );
};

export default Sidebar;
