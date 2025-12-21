

import { useEffect, useState } from "react"
import { LuLoaderPinwheel } from "react-icons/lu";


const BarChart = () => {

   const [isLoadingChart, setIsLoadingChart] = useState(false)

   useEffect(() => {
      setIsLoadingChart(true)

      setTimeout(() => {
         setIsLoadingChart(false)
      }, 1000)
   }, [])

   return (
      <>
         <div className="w-full h-full rounded-[10px] flex justify-center items-center">
            {isLoadingChart ?
               <LuLoaderPinwheel className="w-[40px] h-[40px] text-[#0C35BC] animate-spin" /> :
               <p>Bar Chart will be displayed here.</p>
            }
         </div>
      </>
   )
}

export default BarChart