import { useContext } from "react";
import CuisineFilter from "./CuisineFilter";
import DietFilter from "./DietFilter";
import IngredientFilter from "./IngredientFilter";
import MealTypeFilter from "./MealTypeFilter";
import TimeFilter from "./TimeFilter";
import FilterContext from "../../context/FilterContext";
import { getFilteredSearchResults } from "../../api";
import { mergeArr } from "../../lib/utils";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const {handleSearchResults, handleSearchResultLoading, selectedFilters, prepTime, includedIngredients, excludedIngredients, appliedFilters, setAppliedFilters, searchQuery } = useContext(FilterContext);
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
    const handleFilteredSearch = (number = 16) => {
        handleSearchResultLoading(true);
        if(JSON.stringify(filters) === JSON.stringify(appliedFilters)) {
            handleSearchResultLoading(false)
            return;
        }
        const current = Object.fromEntries(searchParams.entries());
        setSearchParams({...current, page: 1});
        setAppliedFilters(filters);
        getFilteredSearchResults(filters, number)
        .then(data => {
            handleSearchResults(data);
        })
        .finally(() => {
            handleSearchResultLoading(false);
        })
    }
    return (
        <div className="relative h-screen container w-full px-2 py-1 border border-black">
            <div className="w-full sticky top-0 z-10 py-1 flex items-center justify-between px-2">
                <h1 className="text-2xl sm:text-3xl font-[450] font-poppins">Filters</h1>
                <button
                    className="text-base sm:text-lg text-orange-500 px-3 py-0.5 rounded-full cursor-pointer font-[640] hover:text-orange-600 duration-200 focus:underline focus:outline-none focus:text-orange-600 underline-offset-3 decoration-2"
                    onClick={() => {handleFilteredSearch(100)}}
                >
                    Apply filters
                </button>
            </div>
            <section className="flex flex-col gap flex-1 pr-1 border border-black rounded-lg max-h-[86.5vh] overflow-y-auto bg-white">
                <CuisineFilter />
                <MealTypeFilter />
                <DietFilter />
                <TimeFilter />
                <IngredientFilter />
            </section>
        </div>
    )
}