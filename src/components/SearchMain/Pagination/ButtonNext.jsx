import PaginationButton from "./PaginationButton"

export default function ButtonNext({
    isDisabled=false,
    nextHandlers=[]
}) {
    return (
        <PaginationButton
            reverse
            label="Next"
            type="Next"
            isDisabled={isDisabled}
            handlers={nextHandlers}
        />
    )
}