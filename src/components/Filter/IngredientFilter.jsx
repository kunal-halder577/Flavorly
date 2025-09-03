import { useContext, useState } from "react"
import FilterSearch from "./FilterSearch";
import FilterContext from "../../context/FilterContext";
import BadgeList from "./BadgeList";
import useIngredients from "../../hooks/useIngredients";
import BadgeGroup from "./BadgeGroup";

export default function IngredientFilter() {
    const [isIncluded, setIsIncluded] = useState(true);
    const { searchQuery, excludedIngredients, includedIngredients, handleIngredientSearchQuery, handleIncludedIngredientSelect, handleExcludedIngredientSelect, handleIncludedIngredientDelete, handleExcludedIngredientDelete} = useContext(FilterContext)
    const getId = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

    const {arrayOfResult: ingredients, loading} = useIngredients(searchQuery.ingredient, 15, 300);

    const toggleIncludeOn = () => {
        if(!isIncluded) setIsIncluded(true)
    }
    const toggleIncludeOff = () => {
        if(isIncluded) setIsIncluded(false)
    } 

    const onClasses = 'bg-amber-400 hover:bg-amber-500 text-white focus:ring-amber-500';
    const offClasses = `bg-gray-300 hover:bg-gray-400 text-black focus:ring-black`;

    return (
        <div className="container p-2 flex flex-col gap-y-2">
            <p className="text-[1.35rem] font-[380]">Ingredients:</p>
            <div className="controls">
                <button 
                    className={`text-lg px-3 py-[0.1px] rounded-l-lg cursor-pointer
                        duration-200 ease-in-out focus:outline-0 focus:ring focus:ring-offset-2 focus:ring-offset-white
                    ${isIncluded? onClasses : offClasses}`}
                    onClick={toggleIncludeOn}
                    aria-pressed={isIncluded}
                >
                    Include
                </button>
                <button 
                    className={`text-lg px-3 py-[0.1px] rounded-r-lg cursor-pointer
                    duration-200 ease-in-out focus:outline-0 focus:ring focus:ring-offset-2 focus:ring-offset-white
                    ${!isIncluded? onClasses : offClasses}`}
                    onClick={toggleIncludeOff}
                    aria-pressed={!isIncluded}
                >
                    Exclude
                </button>
            </div>
            <div className="search">
                <FilterSearch
                    type="async"
                    loading={loading}
                    getCurrentObject={(value) => ({id: getId(value), label:value})}
                    className="w-[90%]"
                    placeholder="Search ingredients..."
                    searchQuery={searchQuery.ingredient}
                    handleSearchQuery={handleIngredientSearchQuery}
                    handleSelect={isIncluded? handleIncludedIngredientSelect : handleExcludedIngredientSelect}
                    debounceTime={300}
                    dataList={ingredients}
                />
            </div>
            <div className="items w-full flex flex-col gap-y-2">
                <BadgeGroup
                    label="Included"
                    badgeList={includedIngredients}
                    onCancel={(id) => handleIncludedIngredientDelete(id)}
                />
                <BadgeGroup 
                    label="Excluded"
                    badgeList={excludedIngredients}
                    onCancel={(id) => handleExcludedIngredientDelete(id)}
                />
            </div>
        </div>
    )
}