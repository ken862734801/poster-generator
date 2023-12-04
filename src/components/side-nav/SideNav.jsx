import './side-nav.css';

import { X } from "@phosphor-icons/react";
import ColorEditor from "../color-editor/ColorEditor";
import ImageEditor from '../image-editor/ImageEditor';
import SearchForm from "../search-form/SearchForm";
import TextEditor from "../text-editor/TextEditor";

function SideNav(props){
    const { 
            poster,
            setPoster,
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
            });
        } else{
            return null
        };
    };

    return (
        <div className="side-nav">
            <div className="side-nav--header">
                <p>{navigationContent['content'].title}</p>
                <button className='side-nav-close--button' onClick={() => toggleSideNavigation()}>
                    <div className='side-nav-close--div'>
                        <X size={20}/>
                    </div>
                </button>
            </div>
            <div className="side-nav-content">
                { navigationContent['content'].title === "Search" && <SearchForm fetchData={fetchData} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/> }
                { navigationContent['content'].title === 'Text' && <TextEditor poster = {poster} setPoster = {setPoster}/> }
                { navigationContent['content'].title === 'Image' && <ImageEditor/> }
                { navigationContent['content'].title === 'Color' && <ColorEditor poster={poster} colorPalette={colorPalette} setColorPalette={setColorPalette} settings={settings} setSettings={setSettings} /> }
            </div>
        </div>
    )
};

export default SideNav;