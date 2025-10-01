import { useEffect, useState, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from "../Input";
import useDebounce from "../../hooks/useDebounce"
import Loader from "../Loader";

export default function FilterSearch({
    className="",
    loading=false,
    getCurrentObject=() => {},
    searchQuery="",
    handleSearchQuery= () => {},
    placeholder="",
    handleSelect=() => {},
    dataList=[],
    debounceTime = 100,
    ...props
}) {
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const debouncedQuery = useDebounce(searchQuery, debounceTime);
    const inputRef = useRef(null);
    const listItemRefs = useRef([]);
    const dropdownRef = useRef(null);
    const filteredOptions = debouncedQuery.trim()? dataList.filter(cuisine => (
        cuisine.trim().toLowerCase().includes(debouncedQuery.trim().toLowerCase())
    )): []
    const getId = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

    useEffect(() => {
        const input = inputRef.current;
        if (!input) return;

        const handleKeyDown = (e) => {
            if (filteredOptions.length === 0) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setFocusedIndex(prev => (prev + 1) % filteredOptions.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setFocusedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
                    const selectedOption = filteredOptions[focusedIndex];
                    handleSelect(getCurrentObject(selectedOption));
                    handleSearchQuery("");
                    setFocusedIndex(-1);
                }
            }
        };

        input.addEventListener("keydown", handleKeyDown);
        return () => input.removeEventListener("keydown", handleKeyDown);

}, [focusedIndex, filteredOptions]);
    useEffect(() => {
        const el = listItemRefs.current[focusedIndex];
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            console.warn("Scroll target not found for index:", focusedIndex);
        }

    }, [focusedIndex]);
    useEffect(() => {
        listItemRefs.current = [];
    }, [filteredOptions]);
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

    return (
        <div
            className={`container relative flex flex-col justify-center ${className}`}
        >
            <div className="input-container border rounded-lg border-gray-800 flex focus:border-gray-950 pr-4">
                <Input
                    type="text"
                    ref={inputRef}
                    placeholder={placeholder}
                    className="border-none bg-white w-[90%] rounded-lg"
                    inputClassName="w-full rounded-lg text-base sm:text-xl"
                    value={searchQuery}
                    onChange={(e) => handleSearchQuery(e.target.value)}
                />
                {searchQuery && 
                    <button 
                        className="w-[10%] cursor-pointer duration-200 ease-in-out hover:bg-gray-50" 
                        onClick={() => {
                            handleSearchQuery("")
                            setFocusedIndex(-1)
                        }}
                    >
                            <FontAwesomeIcon 
                                icon={faXmark}
                                className="text-gray-500" 
                            />
                    </button>
                }
            </div>
            {(loading || filteredOptions.length > 0) && (
                <div className={`searchList absolute z-10 top-full  w-full`}>
                    {loading? 
                        (<div className="flex items-center justify-center border border-black bg-white h-[20vh] border-t-0 rounded-lg">
                            <Loader />
                        </div>)
                        :
                        (<ul 
                            className={`border border-black max-h-[50vh] overflow-y-auto border-t-0 rounded-lg`}
                            role="listbox"
                        >
                            {filteredOptions.map((option, index) => {
                                const id = getId(option);
                                const isFocused = index === focusedIndex;
                                return (
                                    <li key={id} 
                                        ref={(el) => {
                                            if (el) listItemRefs.current[index] = el;
                                        }}
                                        role="option"
                                        aria-selected={isFocused}
                                    >
                                        <button 
                                            className={`w-full text-base sm:text-xl text-left font-[360] px-3 py-[0.1rem] cursor-pointer ${isFocused ? "bg-orange-200" : "bg-white hover:bg-orange-100"}`}
                                            onClick={() => { 
                                                handleSelect(getCurrentObject(option));
                                                setFocusedIndex(-1);
                                            }}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>)}
                </div>)}
        </div>    
    )
}