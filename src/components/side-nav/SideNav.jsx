import { X } from "@phosphor-icons/react";
import ColorEditor from "../color-editor/ColorEditor";
import SearchForm from "../search-form/SearchForm";

function SideNav(props){
    const { 
            colorPalette,
            setColorPalette,
            fetchData,
            navigationContent, 
            setNavigationContent,
            searchQuery,
            setSearchQuery,
            settings,
            setSettings
         } = props;

    function toggleSideNavigation(){
        if(navigationContent['content'].hidden === false){
            setNavigationContent({
                content:{
                    hidden: true
                }
            })
        } else{
            return null
        };
    };

    return (
        <div className="side-nav">
            <div className="side-nav--container">
                <div className="side-nav--header">
                    <p>{navigationContent['content'].title}</p>
                    <button onClick={() => toggleSideNavigation()}>
                        <span>
                            <X size={20}/>
                        </span>
                    </button>
                </div>
                <div className="side-nav-content">
                    { 
                        navigationContent['content'].title === "Search" && 
                        <div>
                        {<SearchForm
                            fetchData={fetchData}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />}
                        </div>
                    }
                    {
                        navigationContent['content'].title === 'Text' && 
                        <div>
                            <p>Text Content...</p>
                        </div>
                    }
                    {
                        navigationContent['content'].title === 'Image' && 
                        <div>
                            <p>Image Content...</p>
                        </div>
                    }
                    {
                        navigationContent['content'].title === 'Color' && 
                        <div>
                            {<ColorEditor 
                                colorPalette={colorPalette}
                                setColorPalette={setColorPalette}
                                settings={settings}
                                setSettings={setSettings}
                            />}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default SideNav;