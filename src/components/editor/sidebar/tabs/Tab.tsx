import { ElementType, JSX, SetStateAction } from 'react';

interface TabProps {
  name: string;
  label: string;
  icon: ElementType;
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const Tab = (props: TabProps): JSX.Element => {
  const { name, label, icon: Icon, activeTab, setActiveTab, setIsOpen } = props;
  return (
    <li>
      <button onClick={() => {
        setActiveTab(name)
        setIsOpen(true)
      }}>
        {<Icon/>}
        <span>{label}</span>
      </button>
    </li>
  );
};

export default Tab;
