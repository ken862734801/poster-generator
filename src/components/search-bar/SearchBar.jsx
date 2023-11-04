import './search-bar.css';
import { useState } from 'react';
import { MagnifyingGlass, XCircle } from '@phosphor-icons/react';

function SearchBar (props) {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const { placeholderText, nameText, searchQuery, setSearchQuery } = props;

    function handleInputChange(e){
        setSearchQuery({
            ...searchQuery,
            [e.target.name]: e.target.value
        });
        setIsDisplayed(e.target.value.length > 0);
    };

    function handleClearInput(){
        setSearchQuery({
            ...searchQuery, 
            [nameText]: ""
        });
        setIsDisplayed(false);
    }

    return (
        <div className='search-bar--container'>
            <MagnifyingGlass size={20}/>
            <input type='text' value={searchQuery[nameText]} name={nameText} onChange={handleInputChange} placeholder={placeholderText} required></input>
            {isDisplayed && (
                <XCircle onClick={handleClearInput} size={20}/>
            )}
        </div>
    )
};

export default SearchBar;