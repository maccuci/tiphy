import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import { Transition } from '@headlessui/react'
import DropdownMenuItem from './DropdownMenuItem'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
    className?: string
}

export default function DropdownMenu({ className }: Props) {
    return (
        <Menu as="div" className={`${className} relative inline-block text-left`}>
            <div className="flex gap-2">
                <Link to={'/'} className="mr-[12.5rem] max-sm:mr-[11.5rem] pb-2"><AiOutlineHome size={30} /></Link>
                <AiOutlineSearch size={30} />
                <AiOutlineShopping size={30} />
                <Menu.Button className="inline-flex rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#01DBB2] focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
                    arial-label="Menu">
                    <CgMenuLeftAlt className='h-7 w-7' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment} enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 bg-slate-50 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 ">
                    <div className="py-1">
                        <div className="px-3 py-2 uppercase font-bold text-xs">
                            Categories
                        </div>
                        <DropdownMenuItem href='/collections/keyboards'>
                            <div className="flex">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/Halo96_Main01_221129_400x.jpg?v=1669707801" width={32} alt="" className='mr-1' />
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Keyboards
                                    <IoIosArrowForward className='ml-[5rem] mt-1' />
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/keycaps'>
                            <div className='flex'>
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/Keycaps_ShiokazeMain01_221125_400x.jpg?v=1669632454" width={32} alt="" className='mr-1' />
                                Keycaps
                                <IoIosArrowForward className='ml-[5.8rem] mt-1' />
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/switches'>
                            <div className="flex">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/bbk-test-1_400x.jpg?v=1657698141" width={32} alt="" className='mr-1' />
                                Switches
                                <IoIosArrowForward className='ml-[5.5rem] mt-1' />
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/accessories'>
                            <div className="flex">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/ce0408aee6fc10ebe71929485034ce3b_400x.png?v=1659702361" width={32} alt="" className='mr-1' />
                                Accessories
                                <IoIosArrowForward className='ml-[4.5rem] mt-1' />
                            </div>
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}