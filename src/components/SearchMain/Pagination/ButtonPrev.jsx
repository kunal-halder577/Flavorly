import PaginationButton from "./PaginationButton"

export default function ButtonPrev({
    isDisabled=false,
    prevHandlers=[]
}) {
    return (
        <PaginationButton
            label="Previous"
            type="Prev"
            isDisabled={isDisabled}
            handlers={prevHandlers}
        />
    )
}