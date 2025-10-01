import { useEffect, useState } from "react";
import { SearchHeroSection } from "./SearchHeroSection";
import SearchResults from "./SearchResults";

export default function SearchContent() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const rowsPerPage = isMobile? 6 : 2;
    useEffect(() => {
        const handleRows = () => {
            const width = window.innerWidth;
            if(width < 640) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        handleRows();
        window.addEventListener("resize", handleRows);
        return () => window.removeEventListener("resize", handleRows)    
    }, [])
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="p-2 h-full relative flex flex-col items-center gap-6">
                <SearchHeroSection className={""}/>
                <SearchResults 
                    label="Recipes for you" 
                    rowsPerPage={rowsPerPage} 
                />
            </div>
        </div>
    )
}