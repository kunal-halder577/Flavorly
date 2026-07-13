export default function Loader({
    color="bg-amber-500",
    className="",
    containerClassName=""
}) {
   return (
          <div className={`${containerClassName}`}>
            <div 
              className={`w-10 h-10 border-4 border-amber-500 border-dashed rounded-full animate-spin ${className}`}
            >
            </div> 
          </div>
          )
}