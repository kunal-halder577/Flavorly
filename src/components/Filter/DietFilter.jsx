import CustomFilter from "./CustomFilter"
import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

export default function DietFilter() {
    const {searchQuery, handleDietSearchQuery, handleDietSelect, handleDietDelete, appliedFilters} = useContext(FilterContext);

    return (
        <CustomFilter
            label="Diet"
            type="diet"
            searchQuery={searchQuery.diet}
            handleSearchQuery={handleDietSearchQuery}
            handleSelect={handleDietSelect}
            handleDelete={handleDietDelete}
            badgeList={appliedFilters.diet.others}
            placeholder="Search diet..."
        />
    )
    }