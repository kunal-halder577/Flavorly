import { useContext } from "react";
import { staticData } from "../../data";
import Badge from "./Badge";
import FilterContext from "../../context/FilterContext";

export default function QuickSelect({
    type="",
    handleSelect= ()=>{},
    handleDelete=()=> {},
    className=""
}) {
    const { selectedFilters } = useContext(FilterContext);
    const quickFilter = staticData[type].popular;
    const getId = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

    return (
        <div className={`flex flex-wrap w-full gap-2 ${className}`}>
            {quickFilter.map((label) => {
                const id = getId(label);
                const isSelected = selectedFilters?.[type]?.popular?.some(f => f.id === id) || false;
                return <Badge
                            key={id}
                            id={id}
                            label={label}
                            cancelAvail={false}
                            isSelected={isSelected}
                            handleSelect={() => {handleSelect({source:"popular", filter:{id, label}})}}
                            handleDelete={() => {handleDelete("popular", id)}}
                        />
            })}
        </div>
    )
}