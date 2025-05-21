import { JSX, SetStateAction } from 'react';
import { Tab, tabItems} from './index';

interface TabListProps {
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const TabList = (props: TabListProps): JSX.Element => {
  const { activeTab, setActiveTab, setIsOpen } = props;
  return (
    <ul>
      {tabItems.map((items) => {
        return (
          <Tab
            key={items.name}
            name={items.name}
            label={items.label}
            icon={items.icon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsOpen={setIsOpen}
          ></Tab>
        );
      })}
    </ul>
  );
};

export default TabList;
