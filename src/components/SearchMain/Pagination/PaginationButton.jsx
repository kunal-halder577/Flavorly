import Button from "../../Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PaginationButton({
    isDisabled=false,
    isActive=true,
    reverse=false,
    label="",
    type="",
    className="",
    handlers=[]
}) {
    const typeString = type.toLowerCase().trim();
    const icons = {
        prev: ChevronLeft,
        next: ChevronRight,
        page: null
    }
    const Sign = icons[typeString] ?? null;
    

    return (
        <Button 
            className={`${className} flex gap-1 justify-center items-center text-base text-white font-inter focus:ring-orange-500 focus:bg-orange-600 focus:ring-offset-1 px-3 py-1    rounded-md hover:bg-orange-400
            ${reverse? 'flex-row-reverse': ''}
            ${!isActive? 'border-none text-gray-50' : 'text-white'}`}
            bgColor={`${!isActive? 'bg-orange-300': 'bg-orange-500'}`}
            ring={true}
            underline={false}
            onClick={() => {
                if (isDisabled) return;
                handlers.forEach(fn => {
                    if (typeof fn === "function") {
                        fn();
                    }
                });
            }}
            disabled={isDisabled}
        >
            {Sign && <Sign size={18} />}
            <span>{label}</span>
        </Button>
    )
}