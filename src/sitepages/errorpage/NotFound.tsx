

import { Link } from 'react-router-dom'

import { IoHome } from "react-icons/io5";

const NotFound = () => {
    return (
        <>
            <main className="w-full h-screen flex justify-center items-center flex-col">
                <h1 className="text-[#0C35BC] text-5xl font-bagel font-bold">Ooops!</h1>
                <h2 className="text-3xl font-hachi py-4">404 Page</h2>

                <img className="w-[300px] h-[300px] py-4" src="/src/assets/images/notFoundImgAlt.png" alt="" />

                <h3 className="text-2xl font-bagel py-4">Page not found</h3>

                <Link to="/">
                    <button type="button" className="w-[450px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 mt-10 rounded-[10px] border-2 border-[#0C35BC] 
                                 text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                        <IoHome className="w-[30px] h-[30px] mr-5" />
                        Go To Homepage
                    </button>
                </Link>
            </main>
        </>
    )
}

export default NotFound