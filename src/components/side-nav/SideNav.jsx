
function SideNav(props){
    const { navigationContent, setNavigationContent } = props;

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
                    <button onClick={() => toggleSideNavigation()}>Close Side Nav...</button>
                </div>
                <div className="side-nav-content">
                    { 
                        navigationContent['content'].title === "Search" && 
                        <div>
                            <p>Search Content...</p>
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
                            <p>Color Content...</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default SideNav;