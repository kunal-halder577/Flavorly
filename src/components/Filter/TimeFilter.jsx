import { useContext } from "react";
import { readyTime } from "../../data";
import FilterSelect from "./FilterSelect";
import FilterContext from "../../context/FilterContext";

export default function TimeFilter() {
    const { prepTime, handlePrepTimeSelect } = useContext(FilterContext); 
    return (
        <FilterSelect
            label="Preparation time:"
            placeholder={"Select time..."}
            dataList={readyTime}
            data={prepTime}
            handleSelect={handlePrepTimeSelect}
        />
    )
}