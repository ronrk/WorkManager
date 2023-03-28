import Link from 'next/link';
import styles from './PrimaryLink.module.css';

export interface IPrimaryLink {
  path: string;
  label: string;
}

const PrimaryLink: React.FC<IPrimaryLink> = ({ path, label }) => {
  return (
    <li className={'fs-600 ' + styles.linkItem}>
      <Link href={path}>{label}</Link>
    </li>
  );
};

export default PrimaryLink;
