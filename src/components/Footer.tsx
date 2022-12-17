import { useForm } from 'react-hook-form'

import { IoIosArrowForward } from 'react-icons/io'
import { IoLogoVenmo } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import { FiInstagram } from 'react-icons/fi'
import { MdFacebook } from 'react-icons/md'
import { FaDiscord, FaGooglePay } from 'react-icons/fa'
import { GrAmex } from 'react-icons/gr'
import { SiApplepay, SiMastercard, SiPaypal, SiVisa, SiDiscover } from 'react-icons/si'
import { TbBrandMeta } from 'react-icons/tb'

import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

export function Footer() {
    const { register, handleSubmit } = useForm()
    const renderMenuInMobile = () => {
        if (isMobile) {
            return (
                <div>
                    <ul className="row mt-12 ml-8 mr-6 px-4 py-2 border border-none bg-gray-50 rounded-xl">
                        <li>
                            <a className='flex mt-2' href="#">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/Halo96_Main01_221129_400x.jpg?v=1669707801" width={42} alt="" />
                                <Link to={"/collections/keyboards"} className='flex mt-2 ml-2.5'>
                                    Keyboards
                                    <IoIosArrowForward className='ml-[8.5rem] mt-1' />
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a className='flex' href="#">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/Keycaps_ShiokazeMain01_221125_400x.jpg?v=1669632454" width={42} alt="" />
                                <p className='flex mt-2 ml-2.5'>
                                    Keycaps
                                    <IoIosArrowForward className='ml-[9.5rem] mt-1' />
                                </p>
                            </a>
                        </li>
                        <li>
                            <a className='flex' href="#">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/bbk-test-1_400x.jpg?v=1657698141" width={42} alt="" />
                                <p className='flex mt-2 ml-2.5'>
                                    Switches
                                    <IoIosArrowForward className='ml-[9.3rem] mt-1' />
                                </p>
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a className='flex' href="#">
                                <img src="https://cdn.shopify.com/s/files/1/0268/7297/1373/products/ce0408aee6fc10ebe71929485034ce3b_400x.png?v=1659702361" width={42} alt="" />
                                <p className='flex mt-2 ml-2.5'>
                                    Accessories
                                    <IoIosArrowForward className='ml-[8rem] mt-1' />
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    return (
        <footer className="bg-white">
            <div className='mt-4'>
                <h2 className="text-center text-xl max-sm:text-sm font-bold text-black">Join our email list to know our project updates, exclusive offers, and more.</h2>
                <form className='text-center mt-2'>
                    <input className="border px-3 py-2 rounded-l-xl placeholder:text-zinc-700" type="email" {...register("email")} id="email" placeholder="Email Address" />
                    <input className="bg-black text-white font-bold mt-2 px-6 py-2 rounded-r-xl" type="submit" value="&rarr;" />
                </form>
            </div>
            {renderMenuInMobile()}
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h3 className="mb-6 text-sm font-bold text-black">TiPhy Studio</h3>
                    <ul className="text-xs text-black">
                        <li className="mb-3">
                            <a href="#">About Us</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Works</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Updates</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-bold text-black">Support</h3>
                    <ul className="text-xs text-black">
                        <li className="mb-3">
                            <a href="#">Firmwares</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">TiPhy Console</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Shipping Policy</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Payments</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Product Warranty</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Return Policy</a>
                        </li>
                        <li className="mb-3">
                            <a href="#">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-bold text-black">Get in touch</h3>
                    <ul className="text-xs text-black">
                        <li className="mb-3">
                            <a href="#" className="underline flex"><TfiEmail size={20} className="mr-2" />Email us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-bold text-black">Follow Us</h3>
                    <ul className="text-xs text-black flex gap-3">
                        <li className="mb-3">
                            <a href="#"><FiInstagram size={22} /></a>
                        </li>
                        <li className="mb-3">
                            <a href="#"><MdFacebook size={23} /></a>
                        </li>
                        <li className="mb-3">
                            <a href="#"><FaDiscord size={22} /></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-bold text-black">We accept</h3>
                    <ul className="text-xs text-black grid grid-flow-col gap-1">
                        <li className="mb-3">
                            <p><GrAmex size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><SiApplepay size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><SiDiscover size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><TbBrandMeta size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><FaGooglePay size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><SiMastercard size={28} /></p>
                        </li>
                        <li className="mb-3">
                            <p><SiPaypal size={24} /></p>
                        </li>
                        <li className='mb-3'>
                            <p><IoLogoVenmo size={28}/></p>
                        </li>
                        <li className="mb-3">
                            <p><SiVisa size={28} /></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-white md:flex md:items-center md:justify-between">
                <span className="text-xs text-black justify-center">&copy; 2022 TiPhy® Studio | Focus on the Fun in Function
                </span>
            </div>
        </footer>

    )
}