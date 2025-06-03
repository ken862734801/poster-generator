import { SearchPanel, TextPanel, ImagePanel, ColorPanel } from './index';

interface PanelProps {
  activeTab: string;
}

export const Panel = (props: PanelProps) => {
  const { activeTab } = props;
  return (
    <div>
      {activeTab == 'search' && <SearchPanel />}
      {activeTab == 'text' && <TextPanel />}
      {activeTab == 'image' && <ImagePanel />}
      {activeTab == 'color' && <ColorPanel />}
    </div>
  );
};

export default Panel;