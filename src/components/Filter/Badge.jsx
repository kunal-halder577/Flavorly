import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function Badge({
    id="",
    label="",
    className="",
    bgColorSelected="",
    bgColorHoverSelected="",
    bgColorHoverNotSelected="",
    bgColorNotSelected="",
    cancelHoverBg="",
    cancelAvail = false,
    isSelected=false,
    alwaysSelected=false,
    onCancel = () => {},
    handleSelect = () => {},
    handleDelete = () => {}
}) {
    const [selected, setSelected] = useState(alwaysSelected || isSelected);

    const selectedClasses = `${bgColorSelected || "bg-amber-400 border border-amber-400"} ${bgColorHoverSelected || "hover:bg-amber-500 hover:border-amber-500 text-white"} focus:ring-amber-500`;
    const notSelectedClasses = `${bgColorNotSelected || "bg-white text-black"} ${bgColorHoverNotSelected || "hover:bg-gray-50 border border-black"} focus:ring-black`;
    
    function toggleSelect() {
        if(!alwaysSelected) { 
            if(selected) {
                handleDelete()
                setSelected(false)
            }
            else {
                handleSelect()
                setSelected(true)
            }
        }
    }

    return (
        <button 
            className={`${selected? selectedClasses : notSelectedClasses} cursor-pointer duration-200 ease-in-out rounded-full focus:outline-0 focus:ring focus:ring-offset-2 focus:ring-offset-white
            w-fit px-3 py-[2px] flex gap-2 ${className}`}
            onClick={toggleSelect}
            onKeyDown={(e) => {if(e.key === "enter") toggleSelect()}}
        >
            <p>{label}</p>
            {cancelAvail && <div className={`${cancelHoverBg? `hover:${cancelHoverBg}`: "hover:bg-amber-400"} cursor-pointer duration-200 ease-in-out px-1 rounded-full hover:font-[400]`} onClick={() => onCancel()}>
                <FontAwesomeIcon
                    icon={faXmark}
                />
            </div>}
        </button>
    )
}