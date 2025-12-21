


import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { FaSpinner } from "react-icons/fa6";
import { setEditContenderId, setShowEdit } from "@/store/DataSlides/ContenderPageStatesSlide";



const ContenderCard = (props: { id: number; name: string; age: number; role: string; votes: number; percentage: string; image: string }) => {


    const dispatch = useDispatch()


    const [isEditConShowLoading, setIsEditConShowLoading] = useState<boolean>(false)

    const showEditContender = () => {
        setIsEditConShowLoading(true)

        dispatch(setEditContenderId(props.id))

        setTimeout(() => {
            setIsEditConShowLoading(false)
            dispatch(setShowEdit(true))
        }, 1000)
    }


    return (
        <>
            <div className="bg-white w-70 flex justify-center items-center flex-col m-[1%] overflow-hidden rounded-[10px] shadow-[0px_0px_10px_#0C35BC]
            ring-4 ring-gray-600/50">
                <section className="w-full">
                    <img className="w-full h-50" src={props.image} alt="" />
                </section>

                <section className="w-full flex flex-col p-2">
                    <span className="font-poppins font-bold text-[14px]">{props.name}</span>
                    <span className="font-poppins font-semibold text-[12px]">{props.age} years</span>
                    <span className="font-poppins font-semibold text-[12px]">{props.role}</span>
                </section>

                <section className="w-full flex justify-between items-center py-1 px-2 font-poppins font-bold text-[14px]">
                    <span>{props.votes} votes</span>
                    <span>{props.percentage}</span>
                </section>

                <section className="w-full flex justify-center items-center">
                    <button onClick={showEditContender} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white px-5 py-2 my-4 rounded-[10px] border-2 border-[#0C35BC] 
                         text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[12px] hover:text-[#0C35BC] transition-all duration-200">
                        {isEditConShowLoading ?
                            <FaSpinner className="w-3.75 h-3.75 mr-2 animate-spin" /> :
                            <MdModeEdit className="w-5 h-5 mr-2" />
                        }
                        Edit Contender Details
                    </button>
                </section>
            </div>
        </>
    )
}

export default ContenderCard