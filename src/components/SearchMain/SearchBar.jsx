import { useContext } from "react";
import Input from "../Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import FilterContext from "../../context/FilterContext";
import { getFilteredSearchResults } from "../../api";
import { useSearchParams } from "react-router-dom";
import { mergeArr } from "../../lib/utils";

export default function SearchBar({
    className="",
    handleSearchQuery=()=>{}
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const {searchQuery, handleDishSearchQuery, handleSearchResults, handleSearchResultLoading, searchResults, selectedFilters, appliedFilters, setAppliedFilters, prepTime, includedIngredients, excludedIngredients} = useContext(FilterContext);

    const {popularCuisine, otherCuisine, popularDiet, otherDiet, popularMealTypes, otherMealTypes} = mergeArr(selectedFilters);
    const filters = {
        query: searchQuery.dish,
        cuisine: [...popularCuisine, ...otherCuisine].join(','),
        diet: [...popularDiet, ...otherDiet].join(','),
        mealtype: [...popularMealTypes, ...otherMealTypes].join(','),
        prepTime: prepTime.time,
        includedIngredients: includedIngredients.map(i => i.label).join(','),
        excludedIngredients: excludedIngredients.map(i => i.label).join(',')
    }
    async function handleSearch(number=16) {
        const results = JSON.stringify(filters) !== JSON.stringify(appliedFilters)? [] : searchResults;
        handleSearchResults(results);
        handleSearchResultLoading(true);
        if(JSON.stringify(filters) === JSON.stringify(appliedFilters)) {
            handleSearchResultLoading(false);
            return;
        }
        const current = Object.fromEntries(searchParams.entries());
        setSearchParams({...current, page: 1})
        setAppliedFilters(filters);
        try {
            const res = await getFilteredSearchResults(filters, number);
            handleSearchResults(res);
        } catch(err) {
            console.error(err)
            handleSearchResults([])
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
                            handleSearch(100)
                        }
                    }}
                />
                <button 
                        className={`w-[7%] h-full focus:ring-2 focus:ring-black cursor-pointer duration-200 ease-in-out hover:bg-gray-50`} 
                        onClick={() => handleSearch(100)}
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