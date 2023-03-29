import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import PrimaryLink from '../primaryLink/PrimaryLink';
export interface IAccordionButtonProps {
  label: string;
  path: string;
  onToggle(): void;
  open: boolean;
}

const AccordionButton: React.FC<IAccordionButtonProps> = ({
  label,
  path,
  onToggle,
  open,
}) => {
  return (
    <div className="flex jc-between">
      <PrimaryLink path={path} label={label} onClick={onToggle} />
      <button onClick={onToggle}>
        {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
      </button>
    </div>
  );
};

export default AccordionButton;
