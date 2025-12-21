import { useState } from "react"
import { FaCopyright, FaSpinner } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"



const PageFooter = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignUpRedirect = () => {
        setIsLoading(true)

        setTimeout(() => {
            navigate("/auth/signup")
        }, 2000)
    }


    return (
        <>
            <div className="bg-black w-full h-[100px] flex justify-between items-center py-2 px-2">

                <section className="flex justify-center items-center flex-row font-poppins text-white px-10">
                    <FaCopyright className="w-[40px] h-[40px] mr-5" />
                    <span className="font-extrabold">CopyRight, 2025</span>
                </section>

                <section className="flex justify-center items-center flex-row font-poppins text-white mx-10 space-x-5">
                    <span className="font-extrabold">Join this platform</span>

                    <button onClick={handleSignUpRedirect} className="w-[150px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-2 rounded-[10px] border-2 border-[#0C35BC] 
                        text-[14px] font-poppins font-bold cursor-pointer hover:bg-black hover:text-[#0C35BC] transition-all duration-200">
                        {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-2 animate-spin" />}
                        Join Now
                    </button>
                </section>

            </div>
        </>
    )
}

export default PageFooter