import { SearchHeroSection } from "./SearchHeroSection";
import SearchResults from "./SearchResults";

export default function SearchContent() {
    return (
        <div className="container w-full h-full flex flex-col">
            <div className="p-2 h-full relative flex flex-col gap-6">
                <SearchHeroSection className={""}/>
                <SearchResults label="Recipes for you" />
            </div>
        </div>
    )
}