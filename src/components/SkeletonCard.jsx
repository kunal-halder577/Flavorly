import Skeleton from "./Skeleton";

export default function SkeletonCard({
    className=""
}) {
    return (
        <div 
            className={`container shadow-xl w-[16rem] h-[22rem] cursor-pointer
            rounded-lg duration-200 ease-in-out ${className}`}
        >
            <div className="imageContainer w-full h-44">
                <Skeleton 
                    width="100%"
                    height="100%"
                    borderRadius="0.5rem"
                />
            </div>
            <div className="p-2 h-44 flex flex-col justify-evenly">
                <Skeleton
                    width="100%"
                    height="1.2rem"
                    borderRadius="0.25rem"
                />
                <Skeleton
                    width="100%"
                    height="1.2rem"
                    borderRadius="0.25rem"
                />
                <Skeleton
                    width="100%"
                    height="1.2rem"
                    borderRadius="0.25rem"
                />
                <Skeleton
                    width="100%"
                    height="1.2rem"
                    borderRadius="0.25rem"
                />
                
            </div>
        </div>
    )
}