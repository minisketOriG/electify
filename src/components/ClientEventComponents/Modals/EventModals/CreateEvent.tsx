

import { useState } from 'react'
import { FaBookmark, FaSpinner } from 'react-icons/fa6'
import { IoClose } from "react-icons/io5";
import ColorPanel from '../ModalComponents/ColorPanel';
import { useDispatch } from 'react-redux';
import { setShowCreate } from '@/store/DataSlides/EventPageStatesSlide';
import EventCost from '../ModalComponents/EventCost';

const CreateEvent = () => {

    const dispatch = useDispatch()


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedFlagColor, setSelectedFlagColor] = useState<number>(0)
    const [showEventCost, setShowEventCost] = useState<boolean>(false)

    const [scheduleOption, setScheduleOption] = useState<boolean>(false)

    const handleCreateEvent = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            setShowEventCost(true)
        }, 3000)
    }


    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                flex justify-center items-center">
                <div className="relative w-[500px] max-h-[90%] overflow-auto flex items-center flex-col p-4 bg-white rounded-[10px]">

                    <div onClick={() => dispatch(setShowCreate(false))} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                        rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <FaBookmark className="w-[20px] h-[20px] mr-3 " />
                        Create a new event
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Name</p>
                        <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Event Name" />
                    </section>


                    <ColorPanel selectedFlagColor={selectedFlagColor} setSelectedFlagColor={setSelectedFlagColor} />


                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Type</p>

                        <select name="" id="" className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="default">Select an event type</option>
                            <option value="cost">Cost-based Voting</option>
                            <option value="nocost">Free Voting</option>
                        </select>
                    </section>

                    <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Timing</p>

                        <select onChange={(event) => (event.currentTarget.value == "schedule" ? setScheduleOption(true) : setScheduleOption(false))}
                            className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="default">Select an event timing</option>
                            <option value="schedule">Scheduled Event</option>
                            <option value="noschedule">Non-Scheduled Event</option>
                        </select>
                    </section>

                    {scheduleOption ?
                        <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                            <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Scheduling</p>

                            <span className="w-full my-2 font-poppins font-semibold text-[12px]">Start Period</span>
                            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="datetime-local" />

                            <span className="w-full my-2 font-poppins font-semibold text-[12px]">End Period</span>
                            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="datetime-local" />
                        </section> : ""
                    }

                    <section className="w-[95%] flex justify-center items-center flex-col mt-8 mb-2">
                        <button onClick={handleCreateEvent} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                          text-[14px] font-poppins font-semibold cursor-pointer hover:font-bold hover:bg-white hover:text-[#0C35BC] transition-all duration-200">
                            {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                            Create a new event
                        </button>
                    </section>

                    {showEventCost && <EventCost setShowEventCost={setShowEventCost} />}
                </div>
            </div>
        </>
    )
}

export default CreateEvent