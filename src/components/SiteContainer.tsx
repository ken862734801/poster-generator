import { Header, Zoom } from '@/components';
import { useCallback, useState } from 'react';
import { AlbumData } from '@/utils';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { PaletteColors, Settings } from '@/app/page';
import { Button, Tab, TabList } from './ui';
import {
    Image,
    MagnifyingGlass,
    Palette,
    TextAa,
    X,
} from '@phosphor-icons/react';
import {
    ColorContent,
    ImageContent,
    SearchContent,
    TextContent,
} from './content';

export type TabOptions = 'Search' | 'Text' | 'Image' | 'Color' | '';

const icon = {
    close: <X size={18} />,
    color: <Palette size={20} />,
    image: <Image size={20} />,
    search: <MagnifyingGlass size={20} />,
    text: <TextAa size={20} />,
};

export interface SiteContainerProps {
    album?: AlbumData;
    setAlbum?: (album: AlbumData) => void;
    palette?: PaletteColors;
    setPalette?: (palette: PaletteColors) => void;
    settings: Settings;
    setSettings: (settings: Settings) => void;
    getData: (artist: string, album: string) => void;
    children: React.ReactNode;
}

export const SiteContainer: React.FC<SiteContainerProps> = ({
    album,
    setAlbum,
    getData,
    palette,
    setPalette,
    settings,
    setSettings,
    children,
}) => {

    const [activeTab, setActiveTab] = useState<TabOptions>('Search');
    const [showSideNav, setShowSideNav] = useState<boolean>(true);
    const [zoomLevel, setZoomLevel] = useState<number>(0.5);

    const handleTabClick = useCallback((tab: TabOptions) => {
        setActiveTab(tab);
        setShowSideNav(true);
    }, []);

    const handleHideSideNav = () => {
        setActiveTab('');
        setShowSideNav(false);
    };

    const handleZoomLevel = (e: any) => {
        setZoomLevel(e.instance.transformState.scale);
    };

    return (
        <div>
            <Header album={album}/>
            <div className="flex bg-gray-100">
                <aside className="flex bg-white">
                    <TabList>
                        <Tab
                            hint="Search"
                            icon={icon.search}
                            isActive={activeTab === 'Search'}
                            onClick={() => handleTabClick('Search')}
                        />
                        <Tab
                            hint="Text"
                            icon={icon.text}
                            isActive={activeTab === 'Text'}
                            onClick={() => handleTabClick('Text')}
                        />
                        <Tab
                            hint="Image"
                            icon={icon.image}
                            isActive={activeTab === 'Image'}
                            onClick={() => handleTabClick('Image')}
                        />
                        <Tab
                            hint="Color"
                            icon={icon.color}
                            isActive={activeTab === 'Color'}
                            onClick={() => handleTabClick('Color')}
                        />
                    </TabList>
                    {showSideNav && (
                        <div className="w-80 p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h6 className="text-slate-600">{activeTab}</h6>
                                <Button
                                    className="daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost hover:bg-gray-100"
                                    onClick={handleHideSideNav}
                                >
                                    {icon.close}
                                </Button>
                            </div>
                            <div>
                                {activeTab === 'Search' && (
                                    <SearchContent onSearch={getData} />
                                )}
                                {activeTab === 'Text' && (
                                    <TextContent
                                        album={album}
                                        setAlbum={setAlbum}
                                    />
                                )}
                                {activeTab === 'Image' && (
                                    <ImageContent
                                        album={album}
                                        setAlbum={setAlbum}
                                    />
                                )}
                                {activeTab === 'Color' && (
                                    <ColorContent
                                        album={album}
                                        palette={palette}
                                        setPalette={setPalette}
                                        settings={settings}
                                        setSettings={setSettings}

                                    />
                                )}
                            </div>
                        </div>
                    )}
                </aside>
                <TransformWrapper
                    centerOnInit
                    minScale={0.25}
                    initialScale={zoomLevel}
                    maxScale={1}
                    onTransformed={(e) => handleZoomLevel(e)}
                >
                    <TransformComponent
                        wrapperStyle={{
                            width: '100vw',
                            height: '100vh',
                        }}
                    >
                        {children}
                    </TransformComponent>
                    <Zoom
                        zoomLevel={zoomLevel}
                        showSideNav={showSideNav}
                        className="fixed bottom-4 right-6"
                    />
                </TransformWrapper>
            </div>
        </div>
    );
};
