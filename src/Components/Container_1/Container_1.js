import React from 'react'
import img14 from '../Assets/img14.jpg'
import img15 from '../Assets/img15.jpg'
import round4 from '../Assets/round4.jpg'
import round3 from '../Assets/round3.jpg'
import round2 from '../Assets/round2.jpg'
import round1 from '../Assets/round1.jpg'




const Container_1 = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-28 md:flex-row flex-col  items-center gap-10">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded h-[300px] w-[400px]" alt="hero" src={img14} />
                        <div className="element-1 px-10 py-5">
                            <h1 className='text-xl'>Share your Room</h1>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded h-[300px] w-[400px]" alt="hero" src={img15} />
                        <div className="element-1 px-10 py-5">
                            <h1 className='text-xl' >Rent your Room</h1>
                        </div>
                    </div>
                    <div class="lg:flex-grow md:w-3/5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <nav class="flex flex-col h-[350px] w-[300px] items-center gap-3">
                                <div class="lg:w-80 md:w-1/2 w-full hover:shadow">
                                    <div class="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={round4} />
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font font-medium">Welcome</h2>
                                            <p class="text-gray-500">Welcome to our page</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-80 md:w-1/2 w-full hover:shadow">
                                    <div class="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={round1} />
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font font-medium">Safety</h2>
                                            <p class="text-gray-500">Safety and privacy</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-80 md:w-1/2 w-full hover:shadow">
                                    <div class="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={round2} />
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font font-medium">Adventure</h2>
                                            <p class="text-gray-500">Lot of Adveturous trips</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-80 md:w-1/2 w-full hover:shadow">
                                    <div class="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg">
                                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={round3} />
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font font-medium">Community</h2>
                                            <p class="text-gray-500">Teamwork</p>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Container_1
