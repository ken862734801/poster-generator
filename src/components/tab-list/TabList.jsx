
function TabList(props){
    const { navigationContent, setNavigationContent } = props;

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
                <button onClick={() => handleNavigationContent('Search')}>Search</button>
                <button onClick={() => handleNavigationContent('Text')}>Text</button>
                <button onClick={() => handleNavigationContent('Image')}>Image</button>
                <button onClick={() => handleNavigationContent('Color')}>Color</button>
            </div>
        </div>
    )
};

export default TabList;