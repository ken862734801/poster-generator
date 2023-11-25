import './tab-list.css';
import Tab from '../tab/Tab';
import { MagnifyingGlass, TextAa, Image, Palette } from '@phosphor-icons/react';

function TabList(props){
    const { setNavigationContent } = props;

    function handleNavigationContent(category){
        setNavigationContent({
            content: {
                title: category,
                hidden: false
            }
        });
    };

    return (
        <div className="tab-list">
            <div className="tab-list--container">
                <Tab handleTabClick={()=> handleNavigationContent('Search')} icon={<MagnifyingGlass color='#555' size={24}/>} text={'Search'}/>
                <Tab handleTabClick={()=> handleNavigationContent('Text')} icon={<TextAa color='#555' size={24}/>} text={'Text'}/>
                <Tab handleTabClick={()=> handleNavigationContent('Image')} icon={<Image color='#555' size={24}/>} text={'Image'}/>
                <Tab handleTabClick={()=> handleNavigationContent('Color')} icon={<Palette color='#555' size={24}/>} text={'Color'}/>
            </div>
        </div>
    )
};

export default TabList;