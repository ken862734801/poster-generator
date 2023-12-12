

function ZoomWidget(props){
    const { settings, setSettings } = props;

    const newSettings = { ...settings };

    function updateZoomLevel(str){
        if(str === 'increase' && newSettings.zoom.level < 1.50){
            newSettings.zoom.level += 0.25; 
        } else if (str === 'decrease' && newSettings.zoom.level > 0.25){
            newSettings.zoom.level -= 0.25;
        } else {
            return
        };
        setSettings(newSettings);
        console.log(settings);
    };

    return (
        <div className='zoom-widget'>
            <button onClick={() => updateZoomLevel('decrease')}>Decrease</button>
            <button onClick={() => updateZoomLevel('increase')}>Increase</button>
        </div>
    )
};

export default ZoomWidget;