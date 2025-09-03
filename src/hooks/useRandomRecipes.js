import { useEffect, useState } from "react";
import apiKey from "../config";

export default function useRandomRecipes(number=100) {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchResultHandler = (value) => setSearchResults(value);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            const url = `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`;
            try {
                const res = await fetch(url, {signal: controller.signal});
                const data = await res.json();
                setSearchResults(data.recipes);
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
    , [number])
    // console.log(searchResults);
    
    return {searchResults, searchResultHandler, loading};
}