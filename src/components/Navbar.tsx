import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineShopping, AiOutlineHome } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'
import { isMobile } from 'react-device-detect'
import DropdownMenu from './DropdownMenu'

function renderNavbar() {
    const content = () => {
        if (isMobile) {
            return (
                <div className="flex justify-end m-3">
                    <DropdownMenu/>
                </div>
            )
        }
        return (
            <div className="flex justify-around">
                <div className="w-28 h-14 mt-3">
                    <Link to={''}><AiOutlineHome size={30} /></Link>
                </div>
                <div className="">
                    <ul className="flex justify-center font-bold gap-6 mt-4">
                        <li className="hover:underline underline-offset-[16px] decoration-2"><Link to={'/keyboards'}>Keyboards</Link></li>
                        <li className="hover:underline underline-offset-[16px] decoration-2"><Link to={'/keycaps'}>Keycaps</Link></li>
                        <li className="hover:underline underline-offset-[16px] decoration-2"><Link to={'/switches'}>Switches</Link></li>
                        <li className="hover:underline underline-offset-[16px] decoration-2"><Link to={'/accessories'}>Accessories</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="flex font-bold gap-6 mt-4">
                        <li className="flex"><AiOutlineSearch size={30} /></li>
                        <li className=""><MdPersonOutline size={30} /></li>
                        <li className=""><AiOutlineShopping size={30} /></li>
                    </ul>
                </div>
            </div>
        )
    }

    return content()
}

export function Navbar() {
    return (
        <div>
            <nav>
                {renderNavbar()}
            </nav>
        </div>
    )
}