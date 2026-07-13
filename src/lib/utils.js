// src/lib/utils.js
import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(...inputs);
}
const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1));

export function serializeFilters(filters) {
  const params = {};

  Object.entries(filters).forEach(([filterType, categories]) => {
    Object.entries(categories).forEach(([category, values]) => {
      const ids = values.map(v => v.id).filter(Boolean);
      if (ids.length > 0) {
        params[`${filterType}.${category}`] = ids.join(",");
      }
    });
  });

  return params;
}
export function parseFilters(searchParams) {
  const filters = {
    cuisine: { popular: [], others: [] },
    diet: { popular: [], others: [] },
    mealtype: { popular: [], others: [] }
  };

  for (const [key, value] of searchParams.entries()) {
    const [filterType, category] = key.split(".");
    if (filters[filterType] && filters[filterType][category]) {
      const ids = value.split(",").map(v => v.trim());
      filters[filterType][category] = ids.map(id => ({ 
        id: id.trim().toLowerCase(),
        label: capitalize(id.replace(/-/g, " "))
      }));
    }
  }

  return filters;
}
export function parseTime(searchParams) {
  const time = searchParams.get("maxReadyTime") || null;
  const label = (time && time > 60)? "more than 60 minutes": `less than ${time} minutes`
  const timeObj = time? {time, label} : {};
  return timeObj;
}
export function parseIngredients(searchParams, type) {
  const ingredientList = type === "included"? 
  searchParams.get("includedIngredients") : searchParams.get("excludedIngredients");
  const ingredientArr = ingredientList? ingredientList.split(",") : [];
  const ingredientObjList = ingredientArr.map(id => (
    {
      id: id.trim().toLowerCase(),
      label: capitalize(id.replace(/-/g, " "))
    }
  ))
  return ingredientObjList;
}
export function mergeArr(appliedFilters) {
    const popularCuisine = (appliedFilters?.cuisine?.popular || []).map(cuisine => cuisine.label);
    const otherCuisine = (appliedFilters?.cuisine?.others || []).map(cuisine => cuisine.label);
    const popularDiet = (appliedFilters?.diet?.popular || []).map(diet => diet.label);
    const otherDiet = (appliedFilters?.diet?.others || []).map(diet => diet.label);
    const popularMealTypes = (appliedFilters?.mealtype?.popular || []).map(mealType => mealType.label);
    const otherMealTypes = (appliedFilters?.mealtype?.others || []).map(mealType => mealType.label);
    return {
      popularCuisine,
      otherCuisine,
      popularDiet,
      popularMealTypes,
      otherDiet,
      otherMealTypes
    }
}