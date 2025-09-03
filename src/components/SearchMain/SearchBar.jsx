import { useContext } from "react";
import Input from "../Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import FilterContext from "../../context/FilterContext";
import { getSearchResult } from "../../api";
import { useSearchParams } from "react-router-dom";

export default function SearchBar({
    className="",
    handleSearchQuery=()=>{}
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const {searchQuery, handleDishSearchQuery, handleSearchResults, handleSearchResultLoading} = useContext(FilterContext);
    async function handleSearch(query = "", number=16) {
        handleSearchResults([]);
        handleSearchResultLoading(true);
        const current = Object.fromEntries(searchParams.entries());
        setSearchParams({...current, page: 1})
        try {
            const res = await getSearchResult(query, number);
            handleSearchResults(res);
        } catch(err) {
            console.error(err)
        } finally {
            handleSearchResultLoading(false);
        }
    }

    return (
        <div className={`h-full border flex justify-center overflow-hidden rounded-full ${className}`}>
            <div className="w-full flex items-center h-full">
                <Input
                    className="w-[93%] rounded-l-full"
                    inputClassName="bg-white w-full py-[20px] px-4 text-gray-700 rounded-l-full"
                    placeholder="Search your dishes..."
                    value={searchQuery.dish}
                    onChange={(e) => handleDishSearchQuery(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            handleSearch(searchQuery.dish)
                        }
                    }}
                />
                <button 
                        className={`w-[7%] h-full focus:ring-2 focus:ring-black cursor-pointer duration-200 ease-in-out hover:bg-gray-50`} 
                        onClick={() => handleSearch(searchQuery.dish, 100)}
                    >
                    <FontAwesomeIcon 
                        icon={faSearch}
                        className="text-gray-500" 
                    />
                </button>
                {searchQuery.dish &&
                    <button 
                        className="w-[7%] cursor-pointer duration-200 ease-in-out hover:bg-gray-50 h-full rounded-r-full" 
                        onClick={() => {
                            console.log(searchQuery.dish); 
                            handleDishSearchQuery("")
                        }}
                    >
                            <FontAwesomeIcon 
                                icon={faXmark}
                                className="text-gray-500" 
                            />
                    </button>
                }
            </div>
        </div>
    )
}