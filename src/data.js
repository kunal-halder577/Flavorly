export const staticData = {
    cuisine: {
        popular: ["Indian", "Chinese", "Thai", "Italian", "French", "Japanese"],
        others:  ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Eastern European", "European", "German", "Greek","Irish", "Jewish", "Korean", "Latin American", "Mediterranean","Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Vietnamese"]
    },
    mealtype: { 
        popular: ["main course", "side dish", "dessert", "appetizer", "salad", "breakfast"], 
        others: ["bread", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
    },
    diet: {
        popular: ["Vegan", "Vegeterian", "Gluten Free", "Ketogenic"], 
        others: ["Lacto-Vegeterian", "Ovo-Vegeterian", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]
    }
}
export const readyTime = [
    {time: 15, label: "less than 15 minutes"},
    {time: 30, label: "less than 30 minutes"},
    {time: 45, label: "less than 45 minutes"},
    {time: 60, label: "less than 60 minutes"},
    {time: 200, label: "more than 60 minutes"}
]
