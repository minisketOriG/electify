import { useState } from "react"
import { BiSolidCategoryAlt } from "react-icons/bi"
import { FaSpinner } from "react-icons/fa6"
import { PiCursorClickFill } from "react-icons/pi"
import { useNavigate } from "react-router-dom"



const CategoryCard = () => {

    const navigate = useNavigate()

    const [isViewCategory, setIsViewCategory] = useState<boolean>(false)

    const openContenderPage = () => {
        setIsViewCategory(true)

        setTimeout(() => {
            setIsViewCategory(false)
            navigate("/voterpage/categorycheckout/21213424245423")
        }, 1000)
    }

    return (
        <>
            <div className="bg-white w-4/6 flex justify-around items-center flex-row px-2 py-5 rounded-[10px] shadow-[0px_0px_2px_white]">
                <div className="flex justify-center items-center">
                    <BiSolidCategoryAlt className="w-[40px] h-[40px]" />
                </div>

                <div className="w-[50%] flex flex-col font-poppins">
                    <span className="font-bold my-[5px]">Category Name</span>
                    <span className="font-semibold my-[5px]">Category ID</span>
                </div>

                <div className="flex justify-center items-center flex-row space-x-2">

                    <button onClick={openContenderPage} className=" bg-[#0C35BC] w-[200px] flex justify-center items-center text-white px-4 py-2 rounded-[5px] border-2 border-[#0C35BC] 
                          text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                        {isViewCategory ?
                            <FaSpinner className="w-[15px] h-[15px] mr-2 animate-spin" /> :
                           <PiCursorClickFill className="w-[18px] h-[18px] mr-2" />
                        }
                        Select Category
                    </button>

                </div>
            </div>
        </>
    )
}

export default CategoryCard