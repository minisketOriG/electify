

import { IoClose, IoSettingsSharp } from 'react-icons/io5'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import ColorPanel from '../ModalComponents/ColorPanel'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSettings } from '@/store/DataSlides/EventPageStatesSlide'


const EventSettings = () => {

    const pageStates = useSelector((state: any) => state.eventpage.eventPageStates)
    const dispatch = useDispatch()

    //Check Button handler
    const [isOpenCloseEvent, setisOpenCloseEvent] = useState<boolean>(false)
    const handleStatusCheck = () => {
        setisOpenCloseEvent(!isOpenCloseEvent)
    }


    //Save Changes
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedFlagColor, setSelectedFlagColor] = useState<number>(0)

    const handleScheduledEventChanges = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    const handleUnscheduledEventChanges = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }


    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                      flex justify-center items-center">
                <div className="relative w-[500px] max-h-[90%] overflow-auto flex items-center flex-col p-4 bg-white rounded-[10px]">

                    <div onClick={() => dispatch(setShowSettings(false))} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                              rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <IoSettingsSharp className="w-[20px] h-[20px] mr-3" />
                        Event Settings
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Name</p>
                        <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Event Name" />
                    </section>


                    <ColorPanel selectedFlagColor={selectedFlagColor} setSelectedFlagColor={setSelectedFlagColor} />


                    {pageStates.eventTiming ?
                        <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                            <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Scheduling</p>

                            <span className="w-full my-2 font-poppins font-semibold text-[12px]">Start Period</span>
                            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="datetime-local" />

                            <span className="w-full my-2 font-poppins font-semibold text-[12px]">End Period</span>
                            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="datetime-local" />
                        </section>
                        :
                        <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                            <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Status</p>

                            <div className="w-full flex justify-between items-center space-x-2">
                                <span className="font-poppins font-bold text-[14px] transition-all duration-100">{isOpenCloseEvent ? "Opened Event" : "Closed Event"}</span>

                                <div onClick={handleStatusCheck} className={`relative w-[55px] h-[28px] flex items-center  ${isOpenCloseEvent ? 'bg-[#0C35BC]' : 'bg-gray-200'} border border-[#0C35BC] p-2 rounded-full cursor-pointer`}>
                                    <span className={`w-[18px] h-[18px] absolute rounded-full ${isOpenCloseEvent ? 'translate-x-5 bg-white' : 'left-[5px] bg-[#0C35BC]'} transition-all duration-200`}></span>
                                </div>
                            </div>
                        </section>
                    }

                    <section className="w-[95%] flex justify-center items-center flex-col mt-8 mb-2">
                        <button onClick={pageStates.eventTiming ? handleScheduledEventChanges : handleUnscheduledEventChanges} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                                text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:font-bold hover:text-[#0C35BC] transition-all duration-200">
                            {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                            Update Event Settings
                        </button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default EventSettings