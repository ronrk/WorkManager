import PrimaryLink from '../primaryLink/PrimaryLink';

export interface IAccordionItemProps {
  label: string;
  path: string;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ label, path }) => {
  return (
    <li className="accordionItem">
      <PrimaryLink path={path} label={label} small />
    </li>
  );
};

export default AccordionItem;
