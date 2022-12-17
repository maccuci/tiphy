import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import DropdownMenuItem from "./DropdownMenuItem"
import { Link } from "react-router-dom"

interface Props {
    className?: string
}

export default function SortKeyboardMenu({ className }: Props) {
    return (
        <Menu as="div" className={`${className} relative flex justify-end mr-4`}>
            <div className="lg:mt-2 gap-2">
                <Menu.Button className="flex justify-end border border-[#01DBB2] px-4 py-1 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#01DBB2] focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
                    arial-label="Sort Menu">
                    <p>Sort</p>
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
                <Menu.Items className="absolute right-0 z-10 mt-9 w-56 origin-top-right rounded-md border border-zinc-400 bg-slate-50 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 ">
                    <div className="py-1">
                        <DropdownMenuItem href='/collections/keyboards'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Featured
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/keycaps'>
                            <div className='flex'>
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Best Selling
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/switches'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Alphabetically, A-Z
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/accessories'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Alphabetically, Z-A
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/accessories'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Price, Low to High
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/accessories'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Price, High to Low
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/accessories'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Date, Old to New
                                </Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/collections/accessories'>
                            <div className="flex">
                                <Link to={'/collections/keyboards'} className='flex'>
                                    Date, New to Old
                                </Link>
                            </div>
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}