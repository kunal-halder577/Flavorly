import { nanoid } from "nanoid"
import Badge from "./Badge"

export default function BadgeList({
    badgeList = [],
    onCancel= () => {},
    className = ""
}) {
    return (
        <div className={`flex flex-wrap w-full gap-2 ${className}`}>
            {badgeList.map((badge) => (
                <Badge
                    key={badge.id}
                    label={badge.label}
                    id={badge.id}
                    onCancel={() => onCancel(badge.id)}
                    className="pr-1"
                    cancelAvail={true}
                    isSelected={false}
                    alwaysSelected={true}
                />
            ))}
        </div>
    )
}