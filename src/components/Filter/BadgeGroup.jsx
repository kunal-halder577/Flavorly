import BadgeList from "./BadgeList"

export default function BadgeGroup({
    label="",
    badgeList=[],
    onCancel=() => {}
}) {
    
    if(badgeList.length === 0) return null;
    return (
        <div className="included grid gap-2">
            <p className="text-xl font-[370] underline-offset-2 underline">
                {label+"("+badgeList.length+"): "}
            </p>
            <BadgeList
                onCancel={onCancel}
                badgeList={badgeList}
            />
        </div>
    )
}