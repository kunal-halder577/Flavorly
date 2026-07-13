import {ChefHat, Dessert, Flame, HeartPlus, HeartPulse, Sun, Timer, UtensilsCrossed, Vegan} from "lucide-react"
import Card from "./Card"

export default function Grid() {

    const icons = [
        {
            label: "Popular",
            icon: Flame,
        },
        {
            label: "Chef's Choice",
            icon: ChefHat,
        },
        {
            label: "Quick Meal",
            icon: Timer,
        },
        {
            label: "Vegan",
            icon: Vegan,
        },
        {
            label: "Healthy",
            icon: HeartPlus,
        },
        {
            label: "Deserts",
            icon: Dessert,
        },
        {
            label: "Continental",
            icon: UtensilsCrossed
        },
        {
            label: "Seasonal",
            icon: Sun
        }
    ]
    return (
        // <div className="bg-gray-100 mt-12 grid grid-cols-[repeat(2, minmax(0, 100px))] md:grid-cols-[repeat(3, minmax(0, 100px))] lg:grid-cols-[repeat(4, minmax(0, 100px))] gap-x-20 gap-y-20 px-12 py-10">
        <div className="bg-gray-100 mt-12 grid grid-cols-[repeat(auto-fill, minmax(100px, 1fr))] lg:grid-cols-4 auto-rows-fr gap-x-4 lg:gap-x-24 gap-y-10 px-4 py-16 ">
        {/* <div className="bg-gray-100 mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-12 py-10"> */}
            {
                icons.map(icon => (
                    <Card
                        key={icon.label}
                        label={icon.label}
                        IconOb={icon.icon}
                    />
                ))
            }
        </div>
    )
}