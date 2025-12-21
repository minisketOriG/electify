
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//icons
import { FaRegEye, FaSpinner } from 'react-icons/fa6'
import { IoSettingsSharp, IoShareSocialSharp } from 'react-icons/io5'
import { BiSolidCategoryAlt } from "react-icons/bi";

//stateHandlers
import { setShowSettings, setShowShare } from '@/store/DataSlides/CategoryPageStatesSlide';
import { resetContenderVariables } from '@/store/DataSlides/ContenderVarSlide';

const CategoryCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isShowSettingsLoading, setShowSettingsLoading] = useState<boolean>(false)
    const [isShowShareLoading, setShowShareLoading] = useState<boolean>(false)
    const [isViewCategory, setIsViewCategory] = useState<boolean>(false)

    const showCategoryShare = () => {

        setShowShareLoading(true)

        setTimeout(() => {
            setShowShareLoading(false)
            dispatch(setShowShare(true))
        }, 1000)

    }

    const showCategorySettings = () => {

        setShowSettingsLoading(true)

        dispatch(resetContenderVariables())

        setTimeout(() => {
            setShowSettingsLoading(false)
            dispatch(setShowSettings(true))
        }, 1000)

    }

    const openContenderPage = () => {
        setIsViewCategory(true)

        setTimeout(() => {
            setIsViewCategory(false)
            navigate("/clientpage/eventcontenders/6009831")
        }, 1000)
    }

    return (
        <>
            <div className="bg-white w-5/6 flex justify-between items-center flex-row p-5 rounded-[10px] shadow-[0px_0px_2px_white]">
                <div className="flex m-3">
                    <BiSolidCategoryAlt className="w-[40px] h-[40px] mr-4" />
                </div>

                <div className="w-full flex justify-start flex-col">
                    <span className="font-poppins font-bold my-[5px]">Category Name</span>
                    <span className="font-poppins font-semibold my-[5px]">Category ID</span>
                </div>

                <div className="flex justify-center items-center flex-row space-x-2">

                    <button onClick={showCategoryShare} className="w-[35px] h-[35px] bg-[#0C35BC] flex justify-center items-center text-white text-xl p-1 rounded-[10px] border-2 border-[#0C35BC] 
                          font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                        {isShowShareLoading ?
                            <FaSpinner className="w-[15px] h-[15px] animate-spin" /> :
                            <IoShareSocialSharp className="w-[30px] h-[30px]" />
                        }
                    </button>

                    <button onClick={showCategorySettings} type="button" className="w-[35px] h-[35px] bg-[#0C35BC] flex justify-center items-center text-white text-xl p-1 rounded-[10px] border-2 border-[#0C35BC] 
                        font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                        {isShowSettingsLoading ?
                            <FaSpinner className="w-[15px] h-[15px] animate-spin" /> :
                            <IoSettingsSharp className="w-[30px] h-[30px]" />
                        }
                    </button>


                    <button onClick={openContenderPage} className=" bg-[#0C35BC] w-[180px] flex justify-center items-center text-white px-4 py-2 rounded-[5px] border-2 border-[#0C35BC] 
                          text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                        {isViewCategory ?
                            <FaSpinner className="w-[15px] h-[15px] mr-2 animate-spin" /> :
                            <FaRegEye className="w-[20px] h-[20px] mr-2" />
                        }
                        View Category
                    </button>

                </div>
            </div>
        </>
    )
}

export default CategoryCard