import CustomFilter from "./CustomFilter";
import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

export default function MealTypeFilter() {
    const {searchQuery, handleMealTypeSearchQuery, handleMealTypeSelect, handleMealTypeDelete, appliedFilters} = useContext(FilterContext);

    return (
        <CustomFilter
            label="Meal Type"
            type="mealtype"
            searchQuery={searchQuery.mealtype}
            handleSearchQuery={handleMealTypeSearchQuery}
            handleSelect={handleMealTypeSelect}
            handleDelete={handleMealTypeDelete}
            badgeList={appliedFilters.mealtype.others}
            placeholder="Search meal types..."
        />
    )
}