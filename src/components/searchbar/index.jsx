import "./searchbar.css";
import { Search, Close } from "@material-ui/icons";
import { useState } from "react";

const SearchBar = (props) => {
    const { placeholderText, nameText, inputValues, setInputValues} = props;
    const [showClearBtn, setShowClearBtn] = useState(false);

    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
        setShowClearBtn(e.target.value.length > 0);
    }

    const clearInput = () => {
        setInputValues({
          ...inputValues,
          [nameText]: "",
        });
        setShowClearBtn(false);
      };

    return (
        <div className="searchbar-container">
            <Search fontSize="small"></Search>
            <input type="text" onChange={handleInputChange} placeholder={placeholderText} value={inputValues[nameText] || ""} name={nameText} required></input>
            <Close onClick={clearInput} className={showClearBtn ? "clear-btn visible": "clear-btn hidden" } fontSize="small"></Close>
        </div>
    )
};

export default SearchBar;