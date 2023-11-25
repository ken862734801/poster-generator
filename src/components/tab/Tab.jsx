import './tab.css';

function Tab(props){
    const { icon, text, handleTabClick }= props;
    return(
        <button onClick={handleTabClick} className='tab'>
            {icon}
            <p>{text}</p>
        </button>
    )
};

export default Tab;