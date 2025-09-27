import { useState } from "react"

export default function Card({
    title="",
    time="",
    className="",
    image="",
    fallbackImage="",
    dishType=[],
    diet=[],
    onClickHandler=()=>{},
    onImgError=null
}) {
    const [imageError, setImageError] = useState(false);
    const handleImageError = (e) => {
        if(onImgError) onImgError(e)
        setImageError(true)
    }
    return (
        <div 
            className={`cursor-pointer shadow-xl hover:shadow-2xl 
            transition-shadow h-[19.5rem] font-inter
            rounded-lg duration-200 ease-in-out ${className}`}
            onClick={onClickHandler}
        >
            <div className="imageContainer w-full h-[50%]">
                {<img 
                    src={!imageError? image : fallbackImage} 
                    alt={title} 
                    loading="lazy"
                    onError={handleImageError}
                    className={`rounded-t-lg object-cover w-full h-full ${imageError? "grayscale" : ""}`}
                />}
            </div>
            <div className="p-2 h-[50%] text-[1.06rem] flex flex-col gap-1">
                <h2 className="text-lg font-semibold leading-normal line-clamp-2">
                    {title}
                </h2>
                <p>
                    <span className="font-semibold">{`Time: `}</span>
                    {`${time} mins`}
                </p>
                <p className="line-clamp-1" title={diet.join(', ') || "N/A"}>
                    <span className="font-semibold">{`Diet: `}</span>
                    {diet.join(', ') || "N/A"}
                </p>
                <p className="line-clamp-1" title={dishType.join(', ')}>
                    <span className="font-semibold">{`Dish type: `}</span>
                    {dishType.join(', ')}
                </p>
            </div>
        </div>
    )
}