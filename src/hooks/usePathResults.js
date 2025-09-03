import { useEffect, useState, useMemo } from "react";
import { getAllResults } from "../api";
import { useSearchParams } from "react-router-dom";
import { parseFilters, parseIngredients, parseTime, mergeArr } from "../lib/utils"

export default function usePathResults(number=100) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const searchResultHandler = (value) => setSearchResults(value);
    const filters = parseFilters(searchParams);
    const {popularCuisine, otherCuisine, popularDiet, otherDiet, popularMealTypes, otherMealTypes} = mergeArr(filters);
    const time = parseTime(searchParams);
    const includedIngredients = parseIngredients(searchParams, "included");
    const excludedIngredients = parseIngredients(searchParams, "excluded");
    const filterString = useMemo(() => {
        const params = {
            cuisine: [...popularCuisine, ...otherCuisine].join(','),
            diet: [...popularDiet, ...otherDiet].join(','),
            type: [...popularMealTypes, ...otherMealTypes].join(','), // API expects "type"
            maxReadyTime: time.time, // API expects "maxReadyTime"
            includeIngredients: includedIngredients.map(i => i.label).join(','),
            excludeIngredients: excludedIngredients.map(i => i.label).join(',')
        };

        // remove empty keys
        Object.keys(params).forEach(key => {
            if (!params[key]) delete params[key];
        });

        return new URLSearchParams(params).toString();
    }, [popularCuisine, otherCuisine, popularDiet, otherDiet, popularMealTypes, otherMealTypes, time, includedIngredients, excludedIngredients]);
    const dish = searchParams.get("dish");

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAllResults(dish, filterString, number, {signal: controller.signal});
                setSearchResults(res);
            } catch(err) {
                if (!(err instanceof DOMException && err.name === 'AbortError')) {
                        console.error("Ingredient error :: UseIngredient ::", err);
                }
                return;
            } finally {
                if(!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }
        fetchData();
        return () => controller.abort();
    }
    , [])
    
    return {searchResults, searchResultHandler, loading};
}