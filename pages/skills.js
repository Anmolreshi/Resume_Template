import Header from "./Header";
import { useRouter } from 'next/router';

function Skills() {
    const router = useRouter();
    return (
        <div>
            <Header/>
            <div className="text-gray-900 px-6 relative mb-5">
      {/* <h3 className="text-uppercase font-bold text-3xl">
      Frameworks & Libraries</h3> */}<div className="flex items-center w-full mt-4 pl-4 
            cursor-pointer hover:text-gray-600">
            <span  onClick={() => router.push('/')}> 
            Home &nbsp;</span>/ {" "}<span  
            className="text-yellow-600 font-bold"> &nbsp;Stacks</span>
            </div>
            <div className="flex items-center  justify-between  w-full mt-4 pl-4 sm:pr-4">
            <div className="mr-6 bg-yellow-400 px-3 py-2 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">My Skills and Stacks</h2>
          <div className="font-base tracking-tight text-gray-600">  Intrested in hiring me ? Checkout My skills and stacks !</div>
        </div>
        </div>
      <div class="grid grid-cols-2 py-6 shadow-md rounded-2xl mt-2 bg-gray-100 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-5 uppercase">
        <div class="group mr-2 flex items-center  bg-indigo-800
         bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2
          ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer
           hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/174/174854.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>HTML</span>
            
          </div>
        </div>

        <div class="group mr-2  flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/1126/1126012.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>React</span>
       
          </div>
         
        </div>

        <div class="group flex mr-2  items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/732/732190.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>CSS</span>
          </div>
         
        </div>

        <div class="group mr-2  flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/541/541509.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>JavaScript</span>
          
          </div>
        </div>

        <div class="group mr-2  flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/919/919841.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>C++</span>
   
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Bootstrap</span>
            
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Tailwind</span>
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://raw.githubusercontent.com/reactjs/redux/24bab8f05987542ffd186c19400a80f12f717492/logo/logo.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Redux</span>
      
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://www.imaginarycloud.com/blog/content/images/2020/06/material-logo.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Material UI</span>
   
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Next js </span>
         
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="data:image/jpeg;base64,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" 
          alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Styled Components</span>
      
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://reactstrap.github.io/assets/logo.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>ReactStrap </span>
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>firebase </span>
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Github</span>
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Git</span>
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>VS Code</span>
          </div>
        </div>

        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://www.netlify.com/img/press/logos/logomark.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>Netlify</span>
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codesandbox-512.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>CodeSandbox</span>
          </div>
        </div>
        <div class="group mr-2 flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png" alt="" />
          <div className="text-gray-900 font-bold hover:text-white">
            <span>WordPress</span>
          </div>
        </div>

      </div>
    </div>


        </div>
    )
}

export default Skills;
