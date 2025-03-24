import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className="border-t bg-white py-12">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {/* Newsletter */}
                    <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-900 mb-2">Newsletter</h3>
                            <p className="text-sm text-600 mb-1">Sign up to our newsletter today</p>
                            <p className="text-sm text-600 mb-4">
                                Receive our latest offers, product releases and upcoming sale events
                            </p>
                        </div>
                        <form className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-black text-white px-5 py-2 rounded-r-md hover:bg-gray-800 transition-colors text-sm font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-900 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-700">
                                <li><Link to="#" className="hover:text-black">Contact Us</Link></li>
                                <li><Link to="#" className="hover:text-black">About Us</Link></li>
                                <li><Link to="#" className="hover:text-black">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-900 mb-4">Follow Us</h3>
                            <div className="flex space-x-5 text-600">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    <TbBrandMeta className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    <IoLogoInstagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    <RiTwitterXLine className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
