import { useContext } from "react";
import CustomFilter from "./CustomFilter";
import FilterContext from "../../context/FilterContext";

export default function CuisineFilter() {
    const {searchQuery, handleCuisineSearchQuery, handleCuisineSelect, handleCuisineDelete, selectedFilters} = useContext(FilterContext);
    return (
        <CustomFilter
            label="Cuisine"
            type="cuisine"
            searchQuery={searchQuery.cuisine}
            handleSearchQuery={handleCuisineSearchQuery}
            handleSelect={handleCuisineSelect}
            handleDelete={handleCuisineDelete}
            badgeList={selectedFilters.cuisine.others}
            placeholder="Search cuisines..."
        />
    )
}