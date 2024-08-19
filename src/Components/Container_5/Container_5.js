import React from 'react'
import img6 from '../Assets/img6.jpg'
import img3 from '../Assets/img3.jpg'


const Container_5 = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-64 md:h-42 w-full object-cover object-center" src={img3} alt="blog" />
                                <h1 class="title-font text-lg font-medium text-gray-900 my-5 underline">Select Your Visting Date</h1>
                                <div className="date flex felx-wrap items-center justify-center my-5">
                                    <div class="p-2 flex flex-wrap gap-2 items-center justify-center">
                                        <h1 class="title-font text-lg font-medium text-indigo-500">Check in Date </h1>
                                        <div className="inputdate">
                                            <label htmlFor="date"></label>
                                            <input type="date" name="visit" id="visitdate" placeholder='Date' className='px-4 py-2 border border-gray-500 rounded-md' />
                                        </div>
                                    </div>
                                    <div class="p-2 flex flex-wrap gap-2 items-center justify-center">
                                        <h1 class="title-font text-lg font-medium text-indigo-500">Check out Date </h1>
                                        <div className="inputdate">
                                            <label htmlFor="date"></label>
                                            <input type="date" name="visit" id="visitdate" placeholder='Date' className='px-4 py-2 border border-gray-500 rounded-md' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-64 md:h-42 w-full object-cover object-center" src={img6} alt="blog" />
                                <div class="px-6 py-5">
                                    <h1 class="title-font text-lg font-medium text-gray-900 my-2 underline">Search Destination</h1>
                                    <input type="text" placeholder='Search' className='border border-gray-500 rounded-md px-5 py-2 my-12 w-80' />
                                    <div class="flex items-center flex-wrap">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 md:w-1/3">
                            <div class="container px-5 mx-auto flex">
                                <div class="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md items-center">
                                    <h2 class="text-gray-900 text-lg mb-3 font-medium title-font underline">Share Your Profile</h2>
                                    <div class="mb-4">
                                        <label for="email" class="text-sm text-gray-600 pr-64">Name</label>
                                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-80" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="email" class="text-sm text-gray-600 pr-64">Age</label>
                                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-80" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="message" class="leading-7 text-sm text-gray-600 pr-60">Message</label>
                                        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Write about your intrest and hobbies'></textarea>
                                    </div>
                                    <button class="text-white bg-indigo-500 w-28 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                    <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Container_5
