import CustomFilter from "./CustomFilter"
import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

export default function DietFilter() {
    const {searchQuery, handleDietSearchQuery, handleDietSelect, handleDietDelete, selectedFilters} = useContext(FilterContext);

    return (
        <CustomFilter
            label="Diet"
            type="diet"
            searchQuery={searchQuery.diet}
            handleSearchQuery={handleDietSearchQuery}
            handleSelect={handleDietSelect}
            handleDelete={handleDietDelete}
            badgeList={selectedFilters.diet.others}
            placeholder="Search diet..."
        />
    )
    }