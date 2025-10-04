import { useEffect, useState } from "react";

export default function useIngredients(query="", number=15, debounceTime=300) {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!query.trim()) {
            setIngredients([])
            setLoading(false)
            return;
        }
        setLoading(true);

        const controller = new AbortController()
        const handler = setTimeout(
            async () => {
                try {
                    const res = await fetch(
                        `/api/proxy/food/ingredients/autocomplete?query=${query}&number=${number}`,
                        {signal : controller.signal}
                    );
                    const data = await res.json();
                    setIngredients(data);
                } catch(err) {
                    if (!(err instanceof DOMException && err.name === 'AbortError')) {
                        console.error("Ingredient error :: UseIngredient ::", err);
                    }
                } finally {
                    setLoading(false)
                }
            }, 
        debounceTime)
        return () => {
            clearTimeout(handler);
            controller.abort()
        }
    },[query, number, debounceTime])

    const arrayOfResult = ingredients.map(ingredient => ingredient.name);
    return {arrayOfResult, loading};
}