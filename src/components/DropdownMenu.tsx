import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import { Transition } from '@headlessui/react'
import DropdownMenuItem from './DropdownMenuItem'

interface Props {
    className?: string
}

export default function DropdownMenu({ className }: Props) {
    return (
        <Menu as="div" className={`${className} relative inline-block text-left`}>
            <div className="flex gap-2">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 bg-pink-50 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 ">
                    <div className="py-1">
                        <div className="px-3 py-2 uppercase font-bold text-xs">
                            Categories
                        </div>
                        <DropdownMenuItem href='/keyboards'>
                            Keyboards
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/keycaps'>
                            Keycaps
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/switches'>
                            Switches
                        </DropdownMenuItem>
                        <DropdownMenuItem href='/accessories'>
                            Accessories
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}