import HighlightsItem from "./highlights-item";

export function Highlights() {
    return (
        <div>
            <ul className="grid grid-cols-1 gap-4">
                <HighlightsItem>
                    <div className="container max-w-screen-lg mx-auto flex justify-center mt-2">
                        <img src="https://i.shgcdn.com/9e3eacc5-0b26-43d9-b9a0-d8cd8417cfe9/-/format/auto/-/preview/3000x3000/-/quality/lighter/" className="border rounded-xl max-sm:w-[21rem] h-auto max-sm:h-[13.5rem] sm:aspect-video" alt="Thumbnail" />
                    </div>
                    <div>
                        <h3 className="absolute text-5xl max-sm:text-xl text-white font-bold top-[28rem] max-sm:top-44 left-1/2 -translate-x-1/2 -translate-y-1/2">Jalo96</h3>
                        <p className="absolute text-xl max-sm:text-xs font-bold text-white top-[31rem] max-sm:top-[12.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-95">Shortcut your 9 to 6.</p>
                        <button className="absolute boder border-none font-bold text-center rounded-xl bg-[#F7B700] py-[8px] px-[20px] max-sm:py-[4px] max-sm:px-[10px] text-lg max-sm:text-base top-[37rem] max-sm:top-[14.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2">PRE-ORDER NOW</button>
                    </div>
                </HighlightsItem>
                <HighlightsItem>
                    <div className="container max-w-screen-lg mx-auto flex justify-center mt-2">
                        <img src="https://i.shgcdn.com/47dd8cc8-2066-416e-af3b-8285d287ab07/-/format/auto/-/preview/3000x3000/-/quality/lighter/" className="border rounded-xl max-sm:w-[21rem] h-auto max-sm:h-[17.8rem] max-sm:-mt-2 sm:aspect-video" alt="Thumbnail" />
                        <h3 className="absolute text-5xl max-sm:text-xl text-white font-bold top-[58rem] max-sm:top-[29rem] left-1/2 -translate-x-1/2 -translate-y-1/2">Jalo75</h3>
                        <p className="absolute text-xl max-sm:text-xs font-bold text-white text-center top-[62rem] max-sm:top-[31rem] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-95">New heights, new lights, and new highlights.</p>
                        <button className="absolute boder border-none font-bold text-center rounded-xl bg-[#01dfb0] py-[8px] px-[20px] max-sm:py-[4px] max-sm:px-[10px] text-lg max-sm:text-base top-[65rem] max-sm:top-[33.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2">BUY NOW</button>
                    </div>
                </HighlightsItem>
            </ul>
        </div>
    )
}