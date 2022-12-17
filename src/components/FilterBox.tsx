import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { IoIosArrowDown } from 'react-icons/io'

const people = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, Low to High",
    "Price, High to Low",
    "Date, Old to New",
    "Date, New to Old",
]

export default function FilterBox() {
    const [selectedfilter, setSelectedfilter] = useState(people[0]);

    return (
        <div className="items-end justify-end p-12">
            <div className="w-full max-w-xs mx-auto">
                <Listbox
                    as="div"
                    className="space-y-1"
                    value={selectedfilter}
                    onChange={setSelectedfilter}
                >
                    {({ open }) => (
                        <>
                            <div className="relative">
                                <span className="inline-block justify-end w-full rounded-md shadow-sm">
                                    <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                        <span className="block truncate">{selectedfilter}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <IoIosArrowDown />
                                        </span>
                                    </Listbox.Button>
                                </span>

                                <Transition show={open}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                >
                                    <Listbox.Options static
                                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                    >
                                        {people.map((filter) => (
                                            <Listbox.Option key={filter} value={filter}>
                                                {({ selected, active }) => (
                                                    <div
                                                        className={`${active
                                                            ? ""
                                                            : "text-gray-900"
                                                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                    >
                                                        <span
                                                            className={`${selected ? "font-semibold" : "font-normal"
                                                                } block truncate`}
                                                        >
                                                            {filter}
                                                        </span>
                                                        {selected && (
                                                            <span
                                                                className={`${active ? "text-white" : "text-blue-600"
                                                                    } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                            >
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>
        </div>
    )
}