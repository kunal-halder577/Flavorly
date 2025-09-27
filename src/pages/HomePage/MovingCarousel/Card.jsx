import { useState } from "react";


export default function Card({
  title = "",
  time = "",
  className = "",
  image = "",
  fallbackImage = "",
  dishType = [],
  diet = [],
  onClickHandler = () => {},
  onImgError = null,
}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    if (onImgError) onImgError(e);
    setImageError(true);
  };

  return (
    <div
      className="group relative w-[20rem] h-[13.42rem] rounded-xl shadow-xl hover:shadow-2xl cursor-pointer duration-200 ease-in-out overflow-hidden aspect-video"
      onClick={onClickHandler}
    >
      {/* Image */}
      <img
        alt={title}
        loading="lazy"
        onError={handleImageError}
        src={imageError ? fallbackImage : image}
        className={`object-cover w-full h-full transition-transform duration-200 ease-in-out group-hover:scale-110 ${
          imageError ? "grayscale" : ""
        } ${className}`}
      />

      {/* Title */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-left z-10">
        <h3 className="font-serif text-white font-medium text-lg md:text-xl line-clamp-2 drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-gray-200 p-3 duration-300 z-20">
        <p className="text-sm">{time? `${time}mins` : "time: N/A"}</p>
        <p className="text-sm line-clamp-1">
          {dishType.join(", ") || "type: N/A"}
        </p>
        <p className="text-sm line-clamp-1">
          {diet.join(", ") || "diet: N/A"}
        </p>
      </div>
    </div>
  );
}
