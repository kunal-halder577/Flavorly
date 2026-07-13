import PaginationButton from "./PaginationButton";

export default function ButtonPage({
    number=1,
    handler=[],
    isActive=true
}) {
    return (
        <PaginationButton 
            type="page"
            isActive={isActive}
            label={number}
            handlers={handler}
        />
    )
}