import apiKey from "./config";

const api = `https://api.spoonacular.com/recipes/complexSearch`;
const apiKeyParam = `&apiKey=${apiKey}`

export async function getSearchResult(query = "", number=10) {
    const url = `${api}?query=${query}&addRecipeInformation=true&number=${number}${apiKeyParam}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    } catch(err) {
        console.error(err)
    }
}
export async function getFilteredSearchResults(filters={}, number=16) {
    const queries = {
        query: filters.query,
        cuisine: filters.cuisine,
        diet: filters.diet,
        type: filters.mealtype,
        maxReadyTime:  filters.prepTime,
        includeIngredients: filters.includedIngredients,
        excludeIngredients: filters.excludedIngredients
    }
    const queryString = Object.entries(queries)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
    const url = `${api}?${queryString}&addRecipeInformation=true&number=${number}${apiKeyParam}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    } catch(error) {
        console.error(`Error :: getFilteredSearchResults :: ${error}`)
    }
}
export async function getDetailedResult(id=648257) {
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true${apiKeyParam}`
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`getDetailedResult :: Error :: ${error}`);
        return null;
    }
}
export async function getAllResults(query = "", filters = {}, number = 100, { signal } = {}) {
    let queryString = "";

    if (typeof filters === "string") {
        // already a query string, just use it
        queryString = filters;
    } else {
        // build query string from object
        const queries = {
            query,
            cuisine: filters?.cuisine,
            diet: filters?.diet,
            type: filters?.mealtype,
            maxReadyTime: filters?.prepTime,
            includeIngredients: filters?.includedIngredients,
            excludeIngredients: filters?.excludedIngredients,
        };

        queryString = Object.entries(queries)
            .filter(([_, value]) => value) // only keep truthy values
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");
    }

    const url = `${api}?${queryString ? queryString + "&" : ""}addRecipeInformation=true&number=${number}${apiKeyParam}`

    try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.results ?? [];
    } catch (err) {
        console.error(`getAllResults :: Error :: ${err}`);
        return [];
    }
}

