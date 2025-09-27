import SearchBar from "./SearchBar";

export function SearchHeroSection({
    className=""
}) {
    return (
        <div
            className={`w-full flex flex-col gap-y-2 p-4 ${className}`}
        >
            <div className="headings p-2 flex flex-col items-center">
                <h1 className="text-5xl font-bold font-playfair leading-snug">Find Recipes Worth Remembering</h1>
                <p className="text-gray-500 text-2xl font-poppins">Search by ingredients, meal type, or dietary preference.</p>
            </div>
            <div className="flex justify-center">
                <SearchBar className="w-5/6 lg:w-4/6"/>
            </div>
        </div>
    )
}