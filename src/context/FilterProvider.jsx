import { useSearchParams } from "react-router-dom";
import useRandomRecipes from "../hooks/useRandomRecipes";
import usePathResults from "../hooks/usePathResults";
import FilterContext from "./FilterContext";
import { useState, useCallback, useMemo, useEffect } from "react";
import { parseFilters, parseIngredients, parseTime, serializeFilters } from "../lib/utils";

export default function FilterProvider({children}) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState({
        cuisine:"",
        diet:"",
        mealtype:"",
        ingredient:"",
        dish:""
    })
    useEffect(() => {
        setSearchQuery(prev => ({
            ...prev,
            dish: searchParam.get("dish") || ""
        }))    
    }, [searchParam])
    useEffect(() => {
        setSearchParam((prev) => {
            const newParams = new URLSearchParams(prev);
            if(searchQuery.dish) {
                newParams.set("dish", searchQuery.dish)
            } else {
                newParams.delete("dish");
            }
            return newParams;
        })
    }, [searchQuery.dish, setSearchParam])
    const pathResults = usePathResults();
    const randomResults = useRandomRecipes();
    const {searchResults, searchResultHandler, loading:initialLoading} = pathResults ?? randomResults;
    const [searchResultLoading, setSearchResultLoading] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState(
        // {
        //     cuisine: {
        //         popular: [],
        //         others: []
        //     },
        //     diet: {
        //         popular: [],
        //         others: []
        //     },
        //     mealtype: {
        //         popular: [],
        //         others: []
        //     }
        // }
        () => parseFilters(searchParam)
    )
    // useEffect(() => {
    //     const current = Object.fromEntries(searchParam.entries()); // existing params
    //     const serializedFilters = serializeFilters(appliedFilters); // only filters

    //     setSearchParam(
    //         {
    //         ...current,          // keep page, dish, etc.
    //         ...serializedFilters // overwrite/add filters
    //         },
    //         { replace: true }
    //     );
    // }, [appliedFilters, setSearchParam]);
    useEffect(() => {
        const serializedFilters = serializeFilters(appliedFilters);

        // clone all existing params into a plain object
        const current = Object.fromEntries(searchParam.entries());

        // remove old filter keys so they don’t linger
        Object.keys(current).forEach(key => {
            if (key.includes(".")) delete current[key];
        });

        // merge with new filters
        const newParams = {
            ...current,
            ...serializedFilters
        };

        // drop empty values (so they vanish from URL)
        Object.keys(newParams).forEach(key => {
            if (!newParams[key]) delete newParams[key];
        });

        setSearchParam(newParams, { replace: true });
    }, [appliedFilters, searchParam, setSearchParam]);

    const [prepTime, setPrepTime] = useState(() => parseTime(searchParam))
    useEffect(() => {
        setSearchParam((prev) => {
            const current = new URLSearchParams(prev);
            if(prepTime?.time) {
                current.set("maxReadyTime", prepTime.time)
            } else {
                current.delete("maxReadyTime");
            }
            return current;
        })
    }, [prepTime, setSearchParam])

    const [includedIngredients, setIncludedIngredients] = useState(() => parseIngredients(searchParam, "included"));
    useEffect(() => {
        setSearchParam((prev) => {
            const current = new URLSearchParams(prev);
            if(includedIngredients.length > 0) {
                const ingredients = includedIngredients.map(obj => obj.id);
                current.set("includedIngredients", ingredients.join(','))
            } else {
                current.delete("includedIngredients");
            }
            return current;
        })
    }, [includedIngredients, setSearchParam])

    const [excludedIngredients, setExcludedIngredients] = useState(() => parseIngredients(searchParam, "excluded"))
    useEffect(() => {
        setSearchParam((prev) => {
            const current = new URLSearchParams(prev);
            if(excludedIngredients.length > 0) {
                const ingredients = excludedIngredients.map(obj => obj.id);
                current.set("excludedIngredients", ingredients.join(','))
            } else {
                current.delete("excludedIngredients");
            }
            return current;
        })
    }, [excludedIngredients, setSearchParam])

    useEffect(() => {
        setPrepTime(parseTime(searchParam));
    }, [searchParam]);

    useEffect(() => {
        setIncludedIngredients(parseIngredients(searchParam, "included"));
    }, [searchParam]);

    useEffect(() => {
        setExcludedIngredients(parseIngredients(searchParam, "excluded"));
    }, [searchParam]);

    const handleSearchQuery = useCallback((type = "") => (query="") => {
            if(typeof searchQuery[type] === "string" && 
                typeof query === "string") {
                setSearchQuery(searchQuery => ({...searchQuery, [type]: query}))
            }
    }, [searchQuery])
    const handleCuisineSearchQuery = useMemo(() => handleSearchQuery("cuisine"), [searchQuery])
    const handleDietSearchQuery = useMemo(() => handleSearchQuery("diet"), [searchQuery])
    const handleMealTypeSearchQuery = useMemo(() => handleSearchQuery("mealtype"), [searchQuery])
    const handleIngredientSearchQuery = useMemo(() => handleSearchQuery("ingredient"), [searchQuery])
    const handleDishSearchQuery = useMemo(() => handleSearchQuery("dish"), [searchQuery])
    const handleSearchResults = (results) => {
        searchResultHandler(results)
    }
    const handleSearchResultLoading = (mode=true) => {
        setSearchResultLoading(mode);
    }

    const handleSelect = useCallback((filterType = "") => ({source="", filter={}}) => {
        if(!filter.id) return;
        setSearchQuery(searchQuery => ({...searchQuery, [filterType]: ""}));
        const existingFilters = (appliedFilters?.[filterType]?.[source]) || [];
        const doesFilterExist = existingFilters.some(existingFilter => existingFilter.id === filter.id);
        if(!doesFilterExist) {
            setAppliedFilters(prev => (
                {
                    ...prev,
                    [filterType]: {
                        ...(prev[filterType] || {}), 
                        [source]: [...existingFilters, filter]
                    }
                }
            ))
        }
    }, [appliedFilters])
    const handleCuisineSelect = useMemo(() => handleSelect('cuisine'), [appliedFilters])
    const handleDietSelect = useMemo(() => handleSelect("diet"), [appliedFilters])
    const handleMealTypeSelect = useMemo(() => handleSelect("mealtype"), [appliedFilters])
    const handleIncludedIngredientSelect = (ingredient) => {
        handleIngredientSearchQuery("")
        if(ingredient && typeof ingredient === "object") {
            const doesItExist = includedIngredients.some(ing => ing.id === ingredient.id) || excludedIngredients.some(ing => ing.id === ingredient.id);
            if(!doesItExist) {
                setIncludedIngredients(includedItems => [...includedItems, ingredient])
            }
        }
    }
    const handleExcludedIngredientSelect = (ingredient) => {
        handleIngredientSearchQuery("")
        if(ingredient && typeof ingredient === "object") {
            const doesItExist = excludedIngredients.some(ing => ing.id === ingredient.id) || includedIngredients.some(ing => ing.id === ingredient.id);
            if(!doesItExist) {
                setExcludedIngredients(excludedItems => [...excludedItems, ingredient])
            }
        }
    } 

    // const handleDelete = useCallback((filterType = "") => (source="", id="") => {
    //     const existingFilters = appliedFilters[filterType]?.[source] || [];
    //     const afterRemoving = existingFilters.filter(filter => filter.id !== id);
    //     setAppliedFilters(appliedFilters => (
    //         {
    //             ...appliedFilters,
    //             [filterType]: {...appliedFilters[filterType], [source]: afterRemoving}
    //         }
    //     ))
    // }, [appliedFilters])
    const handleDelete = useCallback((filterType = "") => (source="", id="") => {
        const existingFilters = appliedFilters[filterType]?.[source] || [];
        const afterRemoving = existingFilters.filter(filter => filter.id !== id);

        setAppliedFilters(prev => {
            const updatedSource = { ...prev[filterType] };

            if (afterRemoving.length === 0) {
                // ✅ completely remove the source key
                delete updatedSource[source];
            } else {
                updatedSource[source] = afterRemoving;
            }
            return {
            ...prev,
            [filterType]: updatedSource
            };
        });
    }, [appliedFilters]);

    const handleCuisineDelete = useMemo(() => handleDelete("cuisine"), [appliedFilters])
    const handleDietDelete = useMemo(() => handleDelete("diet"), [appliedFilters])
    const handleMealTypeDelete = useMemo(() => handleDelete("mealtype"), [appliedFilters])
    const handleIncludedIngredientDelete = (id) => {
        const filteredIncludedItems = includedIngredients.filter(ingredient => (
            ingredient.id !== id
        ))
        setIncludedIngredients(filteredIncludedItems);
    }
    const handleExcludedIngredientDelete = (id) => {
        const filteredExcludedItems = excludedIngredients.filter(ingredient => (
            ingredient.id !== id
        ))
        setExcludedIngredients(filteredExcludedItems);
    }

    const handlePrepTimeSelect = useCallback((prepTime) => {
        setPrepTime(prepTime);
    }, [prepTime])
    const resultLoading = initialLoading || searchResultLoading;
    return (
        <FilterContext.Provider 
            value={{
                handleCuisineSearchQuery,
                handleCuisineSelect,
                handleCuisineDelete,
                handleDietSearchQuery,
                handleDietSelect,
                handleDietDelete,
                handleMealTypeSearchQuery,
                handleMealTypeSelect,
                handleMealTypeDelete,
                handlePrepTimeSelect,
                handleIngredientSearchQuery,
                handleIncludedIngredientSelect,
                handleIncludedIngredientDelete,
                handleExcludedIngredientSelect,
                handleExcludedIngredientDelete,
                handleSearchResultLoading,
                handleDishSearchQuery,
                handleSearchResults,
                searchResults,
                resultLoading,
                includedIngredients,
                excludedIngredients,
                appliedFilters,
                prepTime,
                searchQuery
            }}>
            {children}
        </FilterContext.Provider>
    )
}