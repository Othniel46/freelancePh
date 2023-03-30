import React from 'react'

const about = () => {
  return (
    <div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-10 py-10">
            <div className="mx-0 sm:mx-6">
                <div className="flex h-full bg-white rounded overflow-hidden shadow-lg pt-10 mt-10">
                        <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                            <div className="w-full md:w-2/3 rounded-t">	
                                <img src="https://source.unsplash.com/collection/494263/800x600"/>
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <p className="w-full text-gray-600 text-xs md:text-lg pt-6 px-6">About Us</p>
                                    <br></br>
                                    <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome to FreelancePH</div>
                                    <br></br>
                                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    We are thrilled that you have taken some time to get acquainted with our brand. Here you will find important information about our company, values, mission, and the
                                    people behind it that make us who we are. We believe that by getting to know us, you'll better understand what drives us to be the best in our industry. Our story is 
                                    one of passion, dedication, and innovation – and we are excited to share it with you.
                                    </p>
                                </div>
                            </div>
                        </a>
                 </div>
            </div>
            <br></br>
            <br></br>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">"Get to know the faces behind our success"</p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Christian Sanchez</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Fullstack Web Developer</p>
                                    </div>
                                </div>
                            </li>  
                            <li>
                                <div className="flex items-center gap-x-6">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Albert Kico Lim</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Fullstack Web Developer</p>
                                    </div>
                                </div>
                            </li>  
                            <li>
                                <div className="flex items-center gap-x-6">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Eliezer Banares</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Full Stack Web Developer</p>
                                    </div>
                                </div>
                            </li>  
                            <li>
                                <div className="flex items-center gap-x-6">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jonnely Dela Torre</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Front End Web Developer</p>
                                    </div>
                                </div>
                            </li>  
                        </ul>       
                </div>       
            </div>
            <div>
                <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                    <div className="h-56 w-full md:w-2/3 rounded-t object-cover">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    </div>        
                </article>
                <br></br>
                <div className="p-4 sm:p-6 pt-10">
                        <a href="#">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            "Our Purpose and Objective"
                        </h3>
                        </a>

                        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        Our vision is to provide world-class freelance web services to clients around the globe. We strive to deliver innovative solutions that match clients' requirements, making us a top choice for digital enterprises.
                        Our mission is to provide high-quality freelance web development services that exceed clients' expectations. Our team of experts is dedicated to delivering exceptional solutions that enhance clients' business growth. We maintain transparency and integrity in all our dealings, and we put the needs of our clients first, always.
                        </p>
                    </div>
                </div>
            <br></br>
            <br></br>
            <div className="text-center">
                    <h1 className="text-2md font-bold tracking-tight text-gray-900 sm:text-6xl">"Testimonials"</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">"Listen to the happy words of our satisfied customers."</p>
                </div>
                <br></br>
                <div className="container mx-auto flex flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                        <div className="p-8 rounded-xl text-center">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            <br></br>
                            <p className="text-base">
                            &quot;"I cannot thank FreelancePH enough for the exceptional work they have done for me. From the very beginning, they have been very professional, patient, and attentive to my needs. They communicated well, kept me updated throughout the project, and always delivered on time. Their attention to detail and the quality of their work exceeded my expectations. I am beyond impressed with their service and would highly recommend them to anyone in need of a reliable and talented freelancer."&quot;
                            </p>
                        <h4 className="mb-2 font-semibold">Lady May Cartalaba</h4>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                    <div className="p-8 rounded-xl text-center">
                    <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                        <br></br>
                        <p className="text-base">
                            &quot;"As a small business owner, finding quality web development services has been a challenge. But working with freelancePH has been a game-changer for me. Not only is she talented and skilled in her craft, but her communication and project management skills are unparalleled. She truly goes above and beyond to ensure that her clients are satisfied with the end result. I will definitely be hiring her for future projects and would highly recommend her to anyone in need of a competent and reliable web developer."&quot;
                        </p>
                        <h4 className="mb-2 font-semibold">Jose Verdeflor Jr</h4>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                    <div className="p-8 rounded-xl text-center">
                    <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                       <br></br>
                        <p className="text-base">
                            &quot;"I couldn't be happier with the work done by FreelancePH! As a busy entrepreneur, I didn't have the time or expertise to create a professional-looking website. But Sarah took the time to listen to my needs and desires, and she turned my website into something that exceeded my expectations. She was easy to work with, responsive to my questions and concerns, and delivered a finished product that I'm truly proud of. I highly recommend Sarah to anyone looking for a skilled and caring freelance web designer!"&quot;
                        </p>
                        <h4 className="mb-2 font-semibold">Elmiah Sailadin</h4>
                    </div>
                </div>
            </div>
        </div> 
        <a href="/" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">Go Back to Home</a>
    </div>
  )
}

export default about