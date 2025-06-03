import { useState } from 'react';
import { Panel, ToggleButton } from './panels';
import { TabList } from './tabs';
import { cn } from '@/lib';

export default function SideBar() {
  const [activeTab, setActiveTab] = useState('search');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        'relative flex',
        isOpen && 'border-r border-r-[var(--border-color)]'
      )}
    >
      <TabList
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsOpen={setIsOpen}
      />
      <div
        className={cn(
          'relative transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'w-80' : 'w-0'
        )}
      >
        {isOpen && <Panel activeTab={activeTab} />}
      </div>
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  );
}
