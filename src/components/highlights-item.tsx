import React from 'react'

interface Props {
    className?: string
    id: number
    name: string,
    description: string
    image?: string
}

const HighlightsItem: React.FC<Props> = ({ className, id, name, description, image }) => {
    return (
        <div className={`${className}`}>
            <li className="text-center mb-4">
                <div className="container max-w-screen-lg mx-auto flex justify-center mt-2">
                    <img src={`${image ? image : ''}`} className="border rounded-xl max-sm:w-10/12 h-auto max-sm:h-[12rem] sm:aspect-video" alt="Thumbnail" />
                </div>
                <div>
                    <h3 className="absolute text-5xl max-sm:text-xl text-white font-bold top-[28rem] max-sm:top-44 left-1/2 -translate-x-1/2 -translate-y-1/2">{name}</h3>
                    <p className="absolute text-xl text-white top-[31rem] max-sm:top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">{description}</p>
                    {/* <button className="absolute boder border-none font-bold rounded-xl bg-[#01dfb0] p-3 text-lg top-[37rem] max-sm:top-56 left-1/2 -translate-x-1/2 -translate-y-1/2">BUY NOW</button> */}
                </div>
            </li>
        </div>
    )
}

export default HighlightsItem