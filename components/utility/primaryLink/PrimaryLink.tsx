import Link from 'next/link';

import styles from './PrimaryLink.module.css';

export interface IPrimaryLink {
  path: string;
  label: string;
  small?: boolean;
  onClick?(): void;
}

const PrimaryLink: React.FC<IPrimaryLink> = ({
  path,
  label,
  small,
  onClick,
}) => {
  return (
    <Link
      className={small ? 'fs-400' : 'fs-600 ' + styles.link}
      href={path}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default PrimaryLink;
