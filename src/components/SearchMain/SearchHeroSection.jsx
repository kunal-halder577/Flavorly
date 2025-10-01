import SearchBar from "./SearchBar";

export function SearchHeroSection({
    className=""
}) {
    return (
        <div
            className={`w-full flex flex-col gap-y-2 p-4 ${className}`}
        >
            <div className="headings space-y-2 p-2 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair leading-snug">Find Recipes Worth Remembering</h1>
                <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-poppins">Search by ingredients, meal type, or dietary preference.</p>
            </div>
            <div className="flex justify-center">
                <SearchBar className="w-[85%] lg:w-4/6 sm:w-5/6 pr-4 md:pr-0"/>
            </div>
        </div>
    )
}