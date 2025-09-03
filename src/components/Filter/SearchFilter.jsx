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
    const {handleSearchResults, handleSearchResultLoading, appliedFilters, prepTime, includedIngredients, excludedIngredients } = useContext(FilterContext);
    const {popularCuisine, otherCuisine, popularDiet, otherDiet, popularMealTypes, otherMealTypes} = mergeArr(appliedFilters);

    const filters = {
        cuisine: [...popularCuisine, ...otherCuisine].join(','),
        diet: [...popularDiet, ...otherDiet].join(','),
        mealtype: [...popularMealTypes, ...otherMealTypes].join(','),
        prepTime: prepTime.time,
        includedIngredients: includedIngredients.map(i => i.label).join(','),
        excludedIngredients: excludedIngredients.map(i => i.label).join(',')
    }
    const handleFilteredSearch = (number = 16) => {
        handleSearchResultLoading(true);
        const current = Object.fromEntries(searchParams.entries());
        setSearchParams({...current, page: 1});
        getFilteredSearchResults(filters, number)
        .then(data => {
            handleSearchResults(data);
        })
        .finally(() => {
            handleSearchResultLoading(false);
        })
    }
    return (
        <div className="relative container w-full h-full px-2 py-1 border border-black">
            <div className="w-full sticky top-0 z-10 py-1 flex items-center justify-between px-2">
                <h1 className="text-3xl font-[450] font-poppins">Filters</h1>
                <button
                    className="text-lg text-orange-500 px-3 py-0.5 rounded-full cursor-pointer font-[640] hover:text-orange-600 duration-200 focus:underline focus:outline-none focus:text-orange-600 underline-offset-3 decoration-2"
                    onClick={() => {handleFilteredSearch(100)}}
                >
                    Apply filters
                </button>
            </div>
            <section className="flex flex-col gap flex-1 pr-1 border border-black rounded-lg h-[93%] overflow-y-auto bg-white">
                <CuisineFilter />
                <MealTypeFilter />
                <DietFilter />
                <TimeFilter />
                <IngredientFilter />
            </section>
        </div>
    )
}