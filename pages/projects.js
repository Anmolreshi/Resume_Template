import Header from "./Header";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowCircleRightIcon, HeartIcon } from "@heroicons/react/outline";

function Projects() {
    const router = useRouter();
    return (
        <div>
         <Header/>
         <div className="flex items-center w-full mt-4 pl-6 mr-6
            cursor-pointer hover:text-gray-600">
                <span  onClick={() => router.push('/')}> Home &nbsp;</span>/ {" "}<span  className="text-yellow-600 font-bold">&nbsp; Projects</span>
                </div>
    <div className="content px-5">
    <div className="flex items-center justify-between  w-full my-4 pl-4 sm:pr-4">
        <div className="mr-6 bg-yellow-400 px-3 py-2 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">My Projects</h2>
          <div className="font-base tracking-tight text-gray-600">Here are some of my Awesome Projects ! Have a Look  </div>
        </div>
        <div className="flex items-center">
          <button  className="bg-gray-900 px-5 py-2 text-sm shadow-sm font-semibold tracking-wider text-white rounded-full hover:bg-gray-800 focus:outline-none"> <ArrowCircleRightIcon className="h-6"/> </button>
        </div>
      </div>

    <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-52   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" className=" w-full object-scale-down lg:object-cover  lg:h-48 rounded-2xl "/>
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                Webapp
                            </div>
                            <h2 className="flex-auto text-lg font-medium">Slack Clone</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                                
                                <p  id="h"className="">Slack Front end clone with messaging feature , 
                                added Google Authentication </p>
                            </div>
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3">
                                <button
                                    className="mb-2 md:mb-0 bg-white px-5 py-2 
                                    shadow-sm tracking-wider border text-gray-600 
                                    rounded-full hover:bg-gray-100 inline-flex
                                     items-center space-x-2 focus:outline-none">
                                    <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                   
                                </button>
                            </div>
                            <button
                                className="mb-2 md:mb-0 bg-gray-900 px-5 
                                py-2 shadow-sm tracking-wider text-white
                                 rounded-full hover:bg-gray-700 focus:outline-none"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col ">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Website
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Google Clone</h2>
                        </div>
                        <p class="mt-3"></p>
                        <div class="flex py-4  text-sm text-gray-600">
                            <div class="flex-1 inline-flex items-center">
                                <p class="">Google Front End clone with Search Functionailty , added Authenication of Google </p>
                            </div>
                          
                        </div>
                        <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                     <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                  
                                </button>
                            </div>
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-52   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" className=" w-full object-scale-down lg:object-cover  lg:h-48 rounded-2xl "/>
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                Webapp
                            </div>
                            <h2 className="flex-auto text-lg font-medium">Slack Clone</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                                
                                <p  id="h"className="">Slack Front end clone with messaging feature , 
                                added Sign In/Up using Google Authentication </p>
                            </div>
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3">
                                <button
                                    className="mb-2 md:mb-0 bg-white px-5 py-2 
                                    shadow-sm tracking-wider border text-gray-600 
                                    rounded-full hover:bg-gray-100 inline-flex
                                     items-center space-x-2 focus:outline-none">
                                    <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                   
                                </button>
                            </div>
                            <button
                                className="mb-2 md:mb-0 bg-gray-900 px-5 
                                py-2 shadow-sm tracking-wider text-white
                                 rounded-full hover:bg-gray-700 focus:outline-none"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col ">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Website
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Google Clone</h2>
                        </div>
                        <p class="mt-3"></p>
                        <div class="flex py-4  text-sm text-gray-600">
                            <div class="flex-1 inline-flex items-center">
                                <p class="">Google Front End clone with Search Functionailty , added Authenication of Google </p>
                            </div>
                          
                        </div>
                        <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                     <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                  
                                </button>
                            </div>
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-52   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" className=" w-full object-scale-down lg:object-cover  lg:h-48 rounded-2xl "/>
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                Webapp
                            </div>
                            <h2 className="flex-auto text-lg font-medium">Slack Clone</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                                
                                <p  id="h"className="">Slack Front end clone with messaging feature , 
                                added Sign In/Up using Google Authentication </p>
                            </div>
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3">
                                <button
                                    className="mb-2 md:mb-0 bg-white px-5 py-2 
                                    shadow-sm tracking-wider border text-gray-600 
                                    rounded-full hover:bg-gray-100 inline-flex
                                     items-center space-x-2 focus:outline-none">
                                    <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                   
                                </button>
                            </div>
                            <button
                                className="mb-2 md:mb-0 bg-gray-900 px-5 
                                py-2 shadow-sm tracking-wider text-white
                                 rounded-full hover:bg-gray-700 focus:outline-none"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col ">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                Website
                            </div>
                            <h2 class="flex-auto text-lg font-medium">Google Clone</h2>
                        </div>
                        <p class="mt-3"></p>
                        <div class="flex py-4  text-sm text-gray-600">
                            <div class="flex-1 inline-flex items-center">
                                <p class="">Google Front End clone with Search Functionailty , added Authenication of Google </p>
                            </div>
                          
                        </div>
                        <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                     <span className=" flex rounded-lg">
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt=""/>
                                          <img className="h-5 w-5 mr-1" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt=""/>
                                        
                                    </span>
                                  
                                </button>
                            </div>
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
        </div>
        )}

export default Projects;
