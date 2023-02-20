import "./searchbar.css";
import { Search, Close } from "@material-ui/icons";

const SearchBar = (props) => {
    const { placeholderText, nameText, inputValues, setInputValues} = props;
// onChange={(e) => onChange(e.target.value)}
    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    }

    const clearInput = () => {
        setInputValues({
            ...inputValues,
            [nameText]: "",
          });
    }
    return (
        <div className="searchbar-container">
            <Search fontSize="small"></Search>
            <input type="text" onChange={handleInputChange} placeholder={placeholderText} value={inputValues[nameText] || ""} name={nameText} required></input>
            <Close onClick={clearInput} className="clear-btn" fontSize="small"></Close>
        </div>
    )
};

export default SearchBar;