import { useContext, useMemo } from "react";
import FilterContext from "../../context/FilterContext";
import SkeletonCard from "../SkeletonCard";
import Card from "../Card";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultGrid({resultWindow=[], number=16, ref}) {
    const { resultLoading } = useContext(FilterContext);
    const skeletons = useMemo(() =>
        Array.from({ length: number }).map((_, i) => <SkeletonCard key={i} />),
    [ number ]);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-1
        //     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border">
        <div className="grid gap-4 grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
             "
            ref={ref}
        >

                {resultLoading?
                    skeletons :
                    resultWindow.length > 0? 
                        resultWindow.map(recipe => (
                            <Card
                                key={recipe.id}
                                title={recipe.title}
                                image={recipe.image}
                                fallbackImage={`/burger1.jpg`}
                                time={recipe.readyInMinutes}
                                diet={recipe.diets}
                                dishType={recipe.dishTypes}
                                onClickHandler={() => {
                                    navigate(`/recipe/${recipe.id}?from=${encodeURIComponent(location.pathname + location.search)}`)
                                }}
                            />
                        ))
                    : (
                        <p className="text-2xl text-gray-500 font-[520]">
                            No Results found!!
                        </p>
                    )
                }
        </div>
    )
}