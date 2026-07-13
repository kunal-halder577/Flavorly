import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDetailedResult } from "../../../api";
import Loader from "../../Loader";
import { ChevronLeft } from "lucide-react";

export default function IndividualResult() {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({})
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from")
  // const id = 648257;

  useEffect(() => {
      const fetchRecipe = async() => {
          setLoading(true);
          try {
             const data = await getDetailedResult(id);
             setRecipe(data)
          } catch(err) {
              console.error(`IndividualResult :: Error :: ${err}`)
          } finally {
              setLoading(false)
          }
      }
      fetchRecipe()
  }, [id])

  if (loading || !recipe || Object.keys(recipe).length === 0) {
    return (
      <div className="max-w-4xl mx-auto h-full flex justify-center items-center">
        <Loader 
          containerClassName="w-fit"
          className="w-12 h-12"
        />
      </div>
    )
  }
  const {title, diets, dishTypes, image, readyInMinutes, servings, extendedIngredients, analyzedInstructions, nutrition, summary, sourceName, sourceUrl} = recipe;
  const handleBack = () => {
    if(from) {
      // console.log('hi1');
      navigate(from)
    } else {
      // console.log("hi2");
      navigate("/search")
    }
  }
  const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1));

  return (
      <div className="max-w-4xl border border-t-0 h-full mx-auto p-4 overflow-y-auto">
        <button className="flex px-2 py-0.5 rounded-lg text-white bg-orange-400  hover:bg-orange-600 duration-200 cursor-pointer
          focus:ring-2 focus:ring-offset-2 focus:outline-0 focus:ring-orange-500
          focus:bg-orange-600"
          aria-label="Go back"
          onClick={handleBack}
        >
          <ChevronLeft/><span>back</span>
        </button>
        <div className="heading flex pt-2 flex-col gap-1">
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <div className="detailedheading pt-4 flex flex-col">
            <p className="text-lg  text-gray-600">
              <span>Diet: </span>
              {(diets ?? []).map(capitalize).join(', ') || "N/A"}
            </p>
            <p className="text-lg text-gray-600">
              <span>Meal type: </span>
              {(dishTypes ?? []).map(capitalize).join(', ') || "N/A"}
            </p>
        </div>
        <figure className="pt-3">
          <img src={image} alt={title} className="w-full max-h-[420px] mx-auto  rounded-md object-cover shadow"/>
          <figcaption className="text-base text-center text-gray-500">{recipe.title}</figcaption>
        </figure>
        <div className="additional-info pt-3 font-semibold flex gap-6 text-xl text-gray-600">
          <p className=""><span>⏳<strong>Ready in: </strong>{readyInMinutes}mins</span></p>
          <p className=""><span>🍽️<strong>Serves: </strong>{servings}</span></p>
        </div>
        <div className="ingredients pt-8 space-y-2">
          <h2 className="text-2xl pb-1 border-b-2 font-[500]">Ingredients</h2>
          <ul className="list-disc text-xl ml-6 space-y-0.5 text-gray-600">
            {(extendedIngredients ?? []).map(i => (
              <li key={`ingredient:${i.id}`}>
                <span>{i.original}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="instructions pt-8 space-y-2">
            <h2 className="text-2xl pb-1 border-b-2 font-semibold">Instructions</h2>
            <ol className="list-decimal text-gray-600 text-xl ml-6 space-y-1">
              {(analyzedInstructions?.[0]?.steps ?? []).map(step => (
                <li key={`number:${step.number}`}>
                  {step.step}
                </li>
              ))}
            </ol>
        </div>
        <div className="nutritions pt-8 space-y-2">
            <h2 className="text-2xl pb-1 border-b-2 font-[500]">Nutritions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-lg text-gray-600">
              {(nutrition.nutrients ?? []).map(nutrient => (
                <div key={`nutrient:${nutrient.name}`}>
                  <strong>{`${nutrient.name}: `}</strong><span>{nutrient.amount}{nutrient.unit}</span>
                </div>
              ))}
            </div>
        </div>
        <div className="summary-source pt-8">
          <div>
            <h2 className="text-2xl pb-1 border-b-2 font-[500]">Summary</h2>
            <p className="text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: summary}}></p>
            <a href={sourceUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700 text-lg pt-8 block">
              Source: {sourceName}
            </a>
          </div>
        </div>
      </div>
    )
}
