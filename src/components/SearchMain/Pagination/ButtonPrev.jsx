import PaginationButton from "./PaginationButton"

export default function ButtonPrev({
    isDisabled=false,
    prevHandlers=[]
}) {
    return (
        <PaginationButton
            label={window.innerWidth < 640? "Prev" : "Previous"}
            type="Prev"
            isDisabled={isDisabled}
            handlers={prevHandlers}
        />
    )
}