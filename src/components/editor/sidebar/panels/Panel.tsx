import { SearchPanel, TextPanel, ImagePanel, ColorPanel } from './index';

interface PanelProps {
  activeTab: string;
  isOpen: boolean;
}

export const Panel = (props: PanelProps) => {
  const { activeTab, isOpen } = props;
  return (
    <div>
      {activeTab == 'Search' && <SearchPanel />}
      {activeTab == 'Text' && <TextPanel />}
      {activeTab == 'Image' && <ImagePanel />}
      {activeTab == 'Color' && <ColorPanel />}
    </div>
  );
};
