import SearchInput from "../search-input/SearchInput";

function SearchForm(props){
    const { fetchData, searchQuery, setSearchQuery } = props;

    function clearForm(){
        setSearchQuery({
            artist: '',
            album: ''
        })
    };

    function handleFormSubmit(e){
        e.preventDefault();
        fetchData(searchQuery.artist, searchQuery.album);
        clearForm()
    };

    return (
        <form onSubmit={handleFormSubmit}>
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
            <button type='submit'>Submit</button>
        </form>
    )
};

export default SearchForm;