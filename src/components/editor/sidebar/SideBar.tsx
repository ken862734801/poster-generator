import { useState } from 'react';
import { TabList } from './tabs/TabList';
import { Panel } from './panels/Panel';

export default function SideBar() {
  const [activeTab, setActiveTab] = useState('Search');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside>
      <TabList
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsOpen={setIsOpen}
      />
      <Panel activeTab={activeTab} isOpen={isOpen} />
    </aside>
  );
}
