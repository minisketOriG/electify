import { EventCostProps } from "@/interfaces/interfaces"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { MdPayments } from "react-icons/md"
import { useNavigate } from "react-router-dom"



const EventCost = (props: EventCostProps) => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const handleAddVariable = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/fundspage/depositfunds')    
        }, 2000)
    }


    function closeCreateEvent() {
        props.setShowEventCost(false)
    }

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20 flex 
                justify-center items-center rounded-[10px]">
                <div className="relative w-4/5 bg-white p-4 rounded-[10px] flex items-center flex-col">

                    <div onClick={closeCreateEvent} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                                                        rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row text-[14px] font-poppins font-bold pt-2">
                        <MdPayments className="w-[20px] h-[20px] mr-2" />
                        Event Cost
                    </h1>

                    <hr className="w-full border-1 border-[#0C35BC] mt-1" />

                    <div className="w-[95%] flex justify-center items-center flex-col mt-5">
                        <p className="font-poppins font-semibold">A cost-based event costs</p>
                        <span className="font-bagel font-bold text-[60px] text-[#0C35BC]">$ 5</span>
                    </div>

                    <section className="w-[95%] flex justify-center items-center flex-col mt-3">
                        <button onClick={handleAddVariable} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                    text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[#0C35BC] transition-all duration-200">
                            {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                            Make Payment
                        </button>
                    </section>

                </div>
            </div>
        </>
    )
}

export default EventCost