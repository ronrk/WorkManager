import styles from './PrimaryButton.module.css';

export interface IPrimaryButton {
  label: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ label }) => {
  return <button className={styles.contaier}>{label}</button>;
};

export default PrimaryButton;
