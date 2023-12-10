import './spinner.css';

function Spinner(props){
   const { settings } = props;

    return (
      <div style={ settings } className='spinner'></div>
    )
};

export default Spinner;