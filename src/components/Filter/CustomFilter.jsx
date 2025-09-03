import FilterSearch from "./FilterSearch";
import QuickSelect from "./QuickSelect";
import { staticData } from "../../data";
import BadgeGroup from "./BadgeGroup";

export default function CustomFilter({
    label="",
    type="",
    searchQuery="",
    handleSearchQuery=()=>{},
    handleSelect=()=>{},
    badgeList=[],
    handleDelete=() => {},
    placeholder=""
}) {
    const filterType = type.trim().toLowerCase();
    const getId = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="w-full  flex flex-col gap-y-2 p-2">
            <p className="text-[1.35rem] font-[380]">{label+":"}</p>
            <FilterSearch
                className="w-[90%]"
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
                getCurrentObject={(value) => ({source: "others", filter:{id: getId(value), label:value}})}
                type={filterType}
                handleSelect={handleSelect}
                placeholder={placeholder}
                dataList={staticData[type]?.others}
            />
            <div className="quick-cuisines w-full flex flex-col gap-y-2">
                <p className="text-xl font-[370] underline-offset-2 underline">Quick:</p>
                <QuickSelect 
                    className="w-full"
                    type={type} 
                    handleSelect={handleSelect}
                    handleDelete={handleDelete}
                />
            </div>
            <BadgeGroup
                label="Included"
                badgeList={badgeList}
                onCancel={(id) => handleDelete("others", id)}
            />
        </div>
    )
}