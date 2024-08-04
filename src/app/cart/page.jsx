import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='containe'>
                                                       {/* <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
            </h2>
            <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                    <span className="w-full max-w-[260px] text-center">Quantity</span>
                    <span className="w-full max-w-[200px] text-center">Total</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div
                    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image" className="xl:w-[140px] rounded-xl"/></div>
                    <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Latest N-5
                            Perfuam
                        </h5>
                        <p
                            className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            Perfumes</p>
                        <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">$120.00</h6>
                    </div>
                </div>
                <div
                    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        $15.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                            Charge)</span></h6>
                    <div className="flex items-center w-full mx-auto justify-center">
                        <button
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder="1"/>
                        <button
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <h6
                        className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        $120.00</h6>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div
                    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162866.png" alt="perfume bottle image" className="xl:w-[140px] rounded-xl"/></div>
                    <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Musk Rose Cooper
                        </h5>
                        <p
                            className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            Perfumes</p>
                        <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">$120.00</h6>
                    </div>
                </div>
                <div
                    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        $15.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                            Charge)</span></h6>
                    <div className="flex items-center w-full mx-auto justify-center">
                        <button
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder="1"/>
                        <button
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <h6
                        className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        $120.00</h6>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div
                    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image" className="xl:w-[140px] rounded-xl"/></div>
                    <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Dusk Dark Hue
                        </h5>
                        <p
                            className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            Perfumes</p>
                        <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">$120.00</h6>
                    </div>
                </div>
                <div
                    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        $15.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                            Charge)</span></h6>
                    <div className="flex items-center w-full mx-auto justify-center">
                        <button
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder="1"/>
                        <button
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <h6
                        className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        $120.00</h6>
                </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">$405.00</h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                    to Payment
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </section> */}


<section
        className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
                <div
                    className="col-span-12 xl:col-span-8 lg:pr-8 pt-4 pb-4 md:py-14 w-full max-xl:max-w-3xl max-xl:mx-auto">
                    <div className="flex items-center justify-between pb-4 md:pb-8 border-b border-gray-300">
                        <h2 className="font-manrope font-medium text-2xl md:text-3xl leading-10 text-black">My Cart</h2>
                        <h2 className="font-manrope font-medium text-xl leading-8 text-gray-600">2 Items</h2>
                    </div>
                    <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                        <div className="col-span-12 md:col-span-7">
                            <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <div className="grid grid-cols-5">
                                <div className="col-span-3">
                                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div
                        className="flex flex-row min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div className="w-full md:max-w-[126px] flex items-center">
                            <Image width={600} height={600} src="/meat.jpg" alt="product image"
                                className="mx-auto rounded-xl aspect-square w-full object-cover object-center"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div className="md:col-span-2">
                                <div className="flex flex-col max-[500px]:items-end gap-3">
                                    <h6 className="font-medium text-lg md:text-lg text-right md:text-left leading-7 text-black">Lamb Loin Cuts</h6>
                                    <h6 className="font-normal text-base leading-7 text-gray-500">Meat</h6>
                                    <h6 className="font-bold text-lg leading-7 text-blue-600 md:text-gray-600 transition-all duration-300 md:group-hover:text-indigo-600  ">$120.00</h6>
                                </div>
                            </div>
                            <div className="flex items-center justify-center max-[500px]:justify-end h-full max-md:mt-3">
                                <div className="flex items-center h-full">
                                    <button
                                        className="group rounded-l-xl px-2 md:px-5  py-[6px] md:py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-base md:text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[5px] md:py-[15px]  text-center bg-transparent"
                                        placeholder="1"/>
                                    <button
                                        className="group rounded-r-xl px-2 md:px-5  py-[6px] md:py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center max-[500px]:justify-end md:justify-end max-md:mt-3 h-full">
                                <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300  group-hover:text-blue-600 hidden md:block">$120.00</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-row min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div className="w-full md:max-w-[126px] flex items-center">
                            <Image width={600} height={600} src="/wool.jpg" alt="product image"
                                className="mx-auto rounded-xl aspect-square w-full object-cover object-center"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div className="md:col-span-2">
                                <div className="flex flex-col max-[500px]:items-end gap-3">
                                    <h6 className="font-medium text-lg md:text-lg text-right md:text-left leading-7 text-black">Wool</h6>
                                    <h6 className="font-normal text-base leading-7 text-gray-500">Yarn</h6>
                                    <h6 className="font-bold text-lg leading-7 text-blue-600 md:text-gray-600 transition-all duration-300 md:group-hover:text-indigo-600  ">$120.00</h6>
                                </div>
                            </div>
                            <div className="flex items-center justify-center max-[500px]:justify-end h-full max-md:mt-3">
                                <div className="flex items-center h-full">
                                    <button
                                        className="group rounded-l-xl px-2 md:px-5  py-[6px] md:py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-base md:text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[5px] md:py-[15px]  text-center bg-transparent"
                                        placeholder="2"/>
                                    <button
                                        className="group rounded-r-xl px-2 md:px-5  py-[6px] md:py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center max-[500px]:justify-end md:justify-end max-md:mt-3 h-full">
                                <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300  group-hover:text-blue-600 hidden md:block">$240.00</p>
                            </div>
                        </div>
                    </div>

               
                   


                    {/* <div className="flex items-center justify-end mt-8">
                        <button
                            className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                            Add Coupon Code
                            <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path
                                    d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                    stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div> */}
                </div>
                <div
                    className=" col-span-12 xl:col-span-4 bg-gradient-to-tr from-blue-50 to-blue-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:px-8 py-14 ">
                    <h2 className="font-manrope font-medium text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                        Order Summary</h2>
                        
                    <div className="mt-8">
                        <div className="flex items-center justify-between pb-6">
                            <p className="font-normal text-lg leading-8 text-black">2 Items</p>
                            <p className="font-medium text-lg leading-8 text-black">$360.00</p>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                            <p className="font-normal text-lg leading-8 text-black">Delivery Charges</p>
                            <p className="font-medium text-lg leading-8 text-green-600 "><span className='line-through text-black '>$8.00</span> FREE</p>
                        </div>
                        <form>
                            {/* <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">Shipping
                            </label>
                            <div className="flex pb-6">
                                <div className="relative w-full">
                                    <div className=" absolute left-0 top-0 py-3 px-4">
                                        <span className="font-normal text-base text-gray-300">Second Delivery</span>
                                    </div>
                                    <input type="text"
                                        className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                                        placeholder="$5.00"/>
                                    <button id="dropdown-button" data-target="dropdown-delivery"
                                        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                        type="button">
                                        <svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                                stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div id="dropdown-delivery" aria-labelledby="dropdown-delivery"
                                        className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10  right-0">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdown-button">
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
                            </label>
                            <div className="flex pb-4 w-full">
                                <div className="relative w-full ">
                                    <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                                    </div>
                                    <input type="text"
                                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="xxxx xxxx xxxx"/>
                                    <button id="dropdown-button" data-target="dropdown"
                                        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                                        type="button"><svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                                stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div id="dropdown"
                                        className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdown-button">
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center border-b border-gray-200">
                                <button
                                    className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Apply</button>
                            </div>
                            <div className="flex items-center justify-between py-8">
                                <p className="font-medium text-xl leading-8 text-black">Total</p>
                                <p className="font-semibold text-xl leading-8 text-indigo-600">$360.00</p>
                            </div>
                            <button
                                className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Checkout</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
                                            
                                            
    </div>
  )
}

export default CartPage