import './search-input.css';

import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

function SearchInput (props){
    const { nameText, placeholderText, searchQuery, setSearchQuery } = props;
    const [isDisplayed, setIsDisplayed] = useState(false);

    function handleSearchInputChange(e){
        setSearchQuery({
            ...searchQuery,
            [nameText]: e.target.value
        });
        console.log(searchQuery);
    };

    return (
        <div className='search-input'>
            <span className="leading-icon">
                <MagnifyingGlass size={20}/>
            </span>
            <input 
                name={nameText} 
                placeholder={placeholderText} 
                type='text' 
                onChange={handleSearchInputChange}
                required>
            </input>
            <button type='button'>
                <span className="search-input-clear--button">
                    <X size={20}/>
                </span>
            </button>
        </div>
    )
};

export default SearchInput;