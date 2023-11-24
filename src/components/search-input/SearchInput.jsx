import './search-input.css';

import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";

function SearchInput (props){
    const { nameText, placeholderText, searchQuery, setSearchQuery } = props;
    const [isDisplayed, setIsDisplayed] = useState(false);

    function handleSearchInputChange(e){
        setSearchQuery({
            ...searchQuery,
            [nameText]: e.target.value
        });
    };

    function handleClearButtonClick(){
        setSearchQuery({
            ...searchQuery,
            [nameText]: ''
        });
    }

    useEffect(() => {
        if(searchQuery[nameText] !== ""){
            setIsDisplayed(true)
        } else {
            setIsDisplayed(false)
        }
    }, [searchQuery]);

    return (
        <div className='search-input'>
            <span className="leading-icon">
                <MagnifyingGlass size={20}/>
            </span>
            <input 
                name={nameText} 
                value={searchQuery[nameText]}
                placeholder={placeholderText} 
                type='text' 
                onChange={handleSearchInputChange}
                required
            />
            {isDisplayed && (
                <button className='search-input-clear--button' type='button' onClick={handleClearButtonClick}>
                    <div className="search-input-clear--div">
                        <X size={20}/>
                    </div>
                </button>
            )}
        </div>
    )
};

export default SearchInput;