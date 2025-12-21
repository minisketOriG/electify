

import { EventStatCardProps } from "../../interfaces/interfaces"

const EventStatCard = (props: EventStatCardProps) => {
    return (
        <>
            <div className="bg-[#0C35BC] flex justify items-center flex-col font-poppins font-semibold w-1/3 p-4 rounded-xl
                    border-4 border-[#0C35BC]/80 text-white">
                <p className="text-[16px]">{props.title}</p>
                <span className="text-[50px] font-bagel font-semibold">{props.amount}</span>
            </div>
        </>
    )
}

export default EventStatCard