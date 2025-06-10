import { ElementType, JSX, SetStateAction } from 'react';
import { cn } from '@/lib';

interface TabProps {
  name: string;
  icon: ElementType;
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const Tab = (props: TabProps): JSX.Element => {
  const { name, icon: Icon, activeTab, setActiveTab, setIsOpen } = props;
  const isActive = activeTab === name;

  const classes = cn(
    'w-16 h-16 flex flex-col justify-center items-center cursor-pointer rounded-lg m-1',
    isActive
      ? 'text-[var(--text-primary)] bg-[var(--background-active)]'
      : 'text-[var(--text-secondary)] hover:bg-[var(--background-hover)]'
  );

  return (
    <li>
      <button
        className={classes}
        onClick={() => {
          setActiveTab(name);
          setIsOpen(true);
        }}
      >
        {<Icon className="w-5 h-5 text-[var(--text-primary)]" />}
        <span className="text-xs capitalize">{name}</span>
      </button>
    </li>
  );
};

export default Tab;
