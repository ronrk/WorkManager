import { accordionItems } from '@/types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from './AccordionButton';
import AccordionItem from './AccordionItem';

export interface IAccordionProps {
  label: string;
  path: string;
}

const Accordion: React.FC<IAccordionProps> = ({ label, path }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const router = useRouter();
  let open = router.pathname === path && openAccordion;
  return (
    <div className={styles.container}>
      <AccordionButton
        label={label}
        path={path}
        onToggle={() => setOpenAccordion((prev) => !prev)}
        open={open}
      />

      {open && (
        <ul>
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.path}
              label={item.label}
              path={path + item.path}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
