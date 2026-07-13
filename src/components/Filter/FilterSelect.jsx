import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useRef, useState, useEffect } from "react";

export default function FilterSelect({
    label="",
    placeholder,
    data={},
    dataList=[],
    handleSelect=() => {}
}) {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const value = (data.label)? data.label: (placeholder? placeholder : "Select...");
    const dropdownRef = useRef();
    const itemRefs = useRef([]);
    const getId = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

    const handleKeys = useCallback((e) => {
        const total = dataList.length;

        if (!total) return;

        switch (e.key) {
            case "ArrowUp":
                e.preventDefault();
                setFocusedIndex(prev => (prev > 0 ? prev - 1 : total - 1));
                break;

            case "ArrowDown":
                e.preventDefault();
                setFocusedIndex(prev => (prev + 1) % total);
                break;

            case "Enter":
                e.preventDefault();
                // Open dropdown if it's not open
                if (!open) {
                    setOpen(true);
                    return;
                }
                const isInvalid = focusedIndex < 0 || focusedIndex >= total;
                const selected = isInvalid ? data : dataList[focusedIndex];

                handleSelect(selected);
                setOpen(false);
                setFocusedIndex(-1);
                break;

            case "Escape":
                setOpen(false);
                setFocusedIndex(-1);
                break;

            default:
                break;
    }
}, [focusedIndex, open, dataList, handleSelect, data]);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
            setFocusedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
            itemRefs.current[focusedIndex].scrollIntoView({
            block: "nearest", // or "center"
            behavior: "smooth", // optional for smooth scroll
            });
        }
    }, [focusedIndex]);

    return (
        <div 
            ref={dropdownRef} 
            className="time-container flex flex-col gap-y-2 w-full p-2"
        >
            <p className="text-lg sm:text-[1.35rem] font-[450]">
                {label? label:"Your Label Here:"}
            </p>
            <div className="relative w-full h-full flex flex-col">
                <div 
                    className="w-[90%] flex items-center border border-gray-600 rounded-lg"
                    onClick={() => {
                        setOpen(!open);
                        setFocusedIndex(-1)
                    }}
                    onKeyDown={(e) => handleKeys(e)}
                    role="combobox"
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    <button 
                        className="w-[90%] px-2 py-1 text-left rounded-l-lg text-base sm:text-xl text-gray-500 cursor-pointer focus:outline-0 focus:bg-gray-50 duration-200 focus:ring focus:ring-gray-600"    
                    >
                        {value}
                    </button>
                    <div className={`dropdown rounded-r-lg py-2.5 h-full bg-amber-400 text-white w-[10%] border-gray-500 flex items-center justify-center focus:bg-gray-50 cursor-pointer`}>
                        <FontAwesomeIcon
                            icon={open? faCaretUp : faCaretDown}
                            className=""
                        />
                    </div>
                </div>
                {open && 
                    <div className="shadow-light w-[90%] absolute z-10 top-full">
                        <ul 
                            className="flex flex-col max-h-[50vh] overflow-y-auto border border-gray-600 rounded-lg border-t-0"
                            role="listbox"
                        >
                            {dataList.map((data, index) => {
                                const id = getId(data.label);
                                const isFocused = index === focusedIndex;
                                return (
                                    <li 
                                        key={id || index}
                                        role="option"
                                        aria-selected={isFocused}
                                    >
                                        <button
                                            ref={(el) => itemRefs.current[index] = el}
                                            className={`w-full px-3 py-[0.1rem] text-left font-[360] text-base sm:text-xl duration-50 cursor-pointer ${isFocused? "bg-orange-200 font-[490]" : "bg-white hover: hover:bg-orange-100"}`}
                                            onClick={() => {
                                                setOpen(false);
                                                setFocusedIndex(-1);
                                                handleSelect(data)
                                            }}
                                        >
                                            {data.label ?? "[No Label]"}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}