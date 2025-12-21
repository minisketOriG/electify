

import { BiSolidRightArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";

const RevenueDescription = () => {
    return (
    <>
        <div className="flex justify-center items-center flex-col">
            <span className="font-poppins font-semibold py-2">10% deduction</span>

            <div className="flex justify-center items-center flex-row space-x-0">
                <FaCircle className="w-[20px] h-[20px] mr-[-10px]" />
                <hr className="w-[150px] border-2 border-black"/>
                <BiSolidRightArrow className="w-[30px] h-[30px] ml-[-10px]"/>
            </div>
        </div>
    </>
  )
}

export default RevenueDescription