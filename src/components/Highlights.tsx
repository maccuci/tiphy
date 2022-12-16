import HighlightsItem from "./highlights-item";

export function Highlights() {
    return (
        <div>
            <ul className="grid grid-cols-1 gap-4">
                <HighlightsItem id={0} name="Halo96"
                    description="Shortcut your 9 to 6."
                    image="https://i.shgcdn.com/9e3eacc5-0b26-43d9-b9a0-d8cd8417cfe9/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                />
            </ul>
        </div>
    )
}