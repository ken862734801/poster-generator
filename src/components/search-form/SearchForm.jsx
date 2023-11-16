import SearchInput from "../search-input/SearchInput";

function SearchForm(props){
    const { fetchData, searchQuery, setSearchQuery } = props;

    function handleFormSubmit(e){
        e.preventDefault();
        fetchData(searchQuery.artist, searchQuery.album);
    };

    return (
        <form>
            <SearchInput
                nameText={'artist'}
                placeholderText={'Search Artist'}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <SearchInput
                nameText={'album'}
                placeholderText={'Search Album'}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <input
                type="submit" 
                value='Submit'
                onClick={handleFormSubmit}
            />
        </form>
    )
};

export default SearchForm;