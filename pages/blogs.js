import Header from "./Header";
import { useRouter } from 'next/router';

function Blogs() {
    const router = useRouter();
    return (
        <div>
            <Header/>
            <div className="flex items-center w-full mt-4 pl-4 
            cursor-pointer hover:text-gray-600">
                <span  onClick={() => router.push('/')}> 
                Home &nbsp;</span>/ {" "}<span  
                className="text-yellow-600 font-bold"> &nbsp;Blogs</span>
                </div>
            <div className="flex items-center  justify-between  w-full mt-4 pl-4 sm:pr-4">
            <div className="mr-6 bg-yellow-400 px-3 py-2 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">My Blogs & Articles</h2>
          <div className="font-base tracking-tight text-gray-600">Here are some of my Awesome Blogs! Have a Read  </div>
        </div>
        </div>
            <div className="grid px-1 -mt-14 grid-cols-1 md:grid-cols-2 lg:-mt-28">
            <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
                <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto">About Hack The Mountains 2.0</h2>
                      
                    </div>
                    <p class="text-sm text-gray-700 mt-4">
                        Lorem, ipsum dolor sit amet consectetur Amet veritatis
                         ipsam reiciendis numquam tempore commodi ipsa suscipit
                          laboriosam, sit earum at sequ adipisicing elit. Amet veritatis
                           ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, 
                           sit earum at sequi.
                    </p>
                    <div class="flex items-center justify-end mt-4 top-auto">
                        <button class=" bg-yellow-500 text-gray-800 px-2 py-2 rounded-md font-bold hover:bg-yellow-400">Read Blog</button>
                    </div>
                    </div>
                    </div>

                    <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
                <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
                      
                    </div>
                    <p class="text-sm text-gray-700 mt-4">
                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                    </p>
                    <div class="flex items-center justify-end mt-4 top-auto">
                    <button class=" bg-yellow-500 text-gray-800 px-2 py-2 rounded-md font-bold hover:bg-yellow-400">Read Blog</button>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div className="grid px-1 grid-cols-1 md:grid-cols-2 lg:-mt-52">
            <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
                <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
                       </div>
                    <p class="text-sm text-gray-700 mt-4">
                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                    </p>
                    <div class="flex items-center justify-end mt-4 top-auto">
                    <button class=" bg-yellow-500 text-gray-800 px-2 py-2 rounded-md font-bold hover:bg-yellow-400">Read Blog</button>
                    </div>
                    </div>
                    </div>

                    <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
                <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
                    src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
                        
                    </div>
                    <p class="text-sm text-gray-700 mt-4">
                        Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
                    </p>
                    <div class="flex items-center justify-end mt-4 top-auto">
                    <button class=" bg-yellow-500 text-gray-800 px-2 py-2 rounded-md font-bold hover:bg-yellow-400">Read Blog</button>
                    </div>
                    </div>
                    </div>

                    

                    </div>

        </div>
    )
}

export default Blogs;
