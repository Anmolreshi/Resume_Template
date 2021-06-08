import { useRouter } from 'next/router';
import {ClipboardListIcon ,AtSymbolIcon,BookmarkAltIcon,AdjustmentsIcon, IdentificationIcon} from "@heroicons/react/outline";
function Header() {
    const router = useRouter();
    return (
        <header className="w-full sticky top-0 z-20">
        <div className="flex p-4 bg-gray-100 w-full items-center
         justify-between ">
        {/* My name  */}
        <div className="flex ml-2 items-center transition 
        duration-700 ease-in-out transform 
         hover:scale-110  ">
         <h2  onClick={() => router.push('/')} className="font-extrabold text-xs md:text-3xl 
         sm:space-x-2">Anmol Reshi </h2>
        </div>
         {/* Nav items */}
        <div className="flex space-x-9 items-center">
        <h2 
            className="flex items-center border border-yellow-300 rounded-full p-3
            hover:bg-yellow-300 cursor-pointer "
            onClick={() => router.push('/')}>
            <IdentificationIcon className="h-5"/>
            <span className="hidden md:inline font-bold">About</span>
            </h2>
            <h2 
            className="flex items-center border border-yellow-300
             rounded-full p-3 hover:bg-yellow-300 cursor-pointer"
             onClick={() => router.push('/skills')}>
            <AdjustmentsIcon className="h-5"/>
            <span className="hidden md:inline font-bold
            ">Stacks</span>
            </h2>
            <h2 
            className="flex items-center border border-yellow-300 rounded-full p-3
             hover:bg-yellow-300 cursor-pointer "
             onClick={() => router.push('/projects')}>
            <ClipboardListIcon className="h-5"/>
            <span className="hidden md:inline font-bold">Projects</span>
            </h2>
            <h2 
            className="flex items-center border border-yellow-300 rounded-full p-3
            hover:bg-yellow-300 cursor-pointer "
            onClick={() => router.push('/blogs')}>
            <BookmarkAltIcon className="h-5"/>
            <span className="hidden md:inline font-bold">Blogs</span>
            </h2>
            <h2 
            className="flex items-center border border-yellow-300 rounded-full p-3
             hover:bg-yellow-300 cursor-pointer"
            onClick={() => router.push('/contact')}>
            <AtSymbolIcon className="h-5"/>
            <span className="hidden md:inline font-bold">Contact</span>
            </h2>
        </div>
        </div>
        </header>
    )
}

export default Header;
