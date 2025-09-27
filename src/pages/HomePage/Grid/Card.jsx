export default function Card({
    IconOb,
    label,
    className
}) {
    return (
        <button className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col justify-center items-center hover:cursor-pointer p-1 focus:ring-2 ring-orange-500 focus:ring-offset-2 focus:outline-1"
        onClick={() => alert("Fuck you!")}
        >
            <IconOb 
                className="text-orange-500 hover:text-orange-400"
                strokewidth={3}
                size={36}    
            />
            {label && <span className="text-lg">{label}</span>}
        </button>
    )
}