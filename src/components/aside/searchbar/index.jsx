import "./searchbar.css";
import { Search, Close } from "@material-ui/icons";
import { useState } from "react";

const SearchBar = (props) => {
    const {setFormSubmitted, placeholderText, nameText, inputValues, setInputValues} = props;
    const [showClearBtn, setShowClearBtn] = useState(false);

    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
        setShowClearBtn(e.target.value.length > 0);
    }

    // const clearInput = () => {
    //     setInputValues({
    //       ...inputValues,
    //       [nameText]: "",
    //     });
    //     setShowClearBtn(false);
    //   };

      const clearInput = () => {
        setInputValues({ ...inputValues, [nameText]: "" });
        setShowClearBtn(false);
        props.setFormSubmitted(false);
    };

    return (
        <div className="searchbar-container">
            <Search fontSize="small"></Search>
            <input type="text" onChange={handleInputChange} placeholder={placeholderText} value={inputValues[nameText]} name={nameText} required></input>
            {showClearBtn && !props.formSubmitted && (
                <Close className="clear-btn" onClick={clearInput} />
            )}
        </div>
    )
};

export default SearchBar;