import "./searchbar.css";
import { Search, Close } from "@material-ui/icons";

const SearchBar = (props) => {
    const { placeholderText, nameText, onChange } = props;

    return (
        <div className="searchbar-container">
            <Search></Search>
            <input onChange={(e) => onChange(e.target.value)} type="text" placeholder={placeholderText} name={nameText} required></input>
            <Close className="clear-btn" fontSize="small"></Close>
        </div>
    )
};

export default SearchBar;