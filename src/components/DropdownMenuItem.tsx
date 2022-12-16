import React from 'react'
import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type Props = {
    href: string
    children: React.ReactNode
    className?: string
}

export default function DropdownMenuItem({ href, children, className }: Props) {
    return (
        <Menu.Item>
            {({active}) => (
                <Link to={href} className={`${classNames(active ? 'bg-slate-300' : '', 'block px-4 py-2 text-sm')} ${className}`}>
                    {children}
                </Link>
            )}
        </Menu.Item>
    ) 
}