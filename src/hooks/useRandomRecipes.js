import { useEffect, useState } from "react";

export default function useRandomRecipes(number=100) {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchResultHandler = (value) => setSearchResults(value);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            const apibase = import.meta.env.DEV? "http://localhost:3000" : "";
            const url = `${apibase}/api/proxy/recipes/random?number=${number}`;
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
    
    return {searchResults, searchResultHandler, loading};
}