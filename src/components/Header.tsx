import { HiArrowLongRight } from 'react-icons/hi2'
import { Navbar } from './Navbar'

interface Props {
    className?: string
}

export function Header({ className }: Props) {
    return (
        <div className={`${className}`}>
            <div className="bg-gradient-to-r from-[#01DBB2] to-[#1374F0]">
                <a href=""
                    className="flex justify-center text-white p-[0.55rem] text-sm font-bold">Follow our Instagram <HiArrowLongRight className="ml-1 mt-1" />
                </a>
            </div>
            <Navbar/>
        </div>
    )
}