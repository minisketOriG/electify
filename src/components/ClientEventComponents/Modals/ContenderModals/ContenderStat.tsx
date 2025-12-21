
import { setShowMetrics } from "@/store/DataSlides/ContenderPageStatesSlide"
import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import BarChart from "../ModalComponents/Charts/BarChart"
import LineChart from "../ModalComponents/Charts/LineChart"
import RaceChart from "../ModalComponents/Charts/RaceChart"
import PieChart from "../ModalComponents/Charts/PieChart"
import RawChart from "../ModalComponents/Charts/RawChart"
import { FaChartSimple } from "react-icons/fa6"

const ContenderStat = () => {

  const dispatch = useDispatch()

  const [selectedChart, setSelectedChart] = useState<number>(1)

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50
                            flex justify-center items-center">
        <div className="relative min-w-[700px] max-h-[90%] overflow-auto flex justify-center items-center flex-col p-4 bg-white rounded-[10px]">

          <div onClick={() => { dispatch(setShowMetrics(false)) }} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                    rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
            <IoClose className="w-[25px] h-[25px]" />
          </div>

          <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
            <FaChartSimple className="w-[20px] h-[20px] mr-3" />
            Category Statistics
          </h1>

          <hr className="w-full border-2 border-[#0C35BC] mt-2" />

          <div className="w-full flex justify-start items-start flex-row space-x-2 text-[12px]">
            <p onClick={() => setSelectedChart(1)} className={`${selectedChart === 1 && 'font-bold text-white'} bg-[#0C35BC] font-poppins mt-4 py-1 px-4 rounded-[4px]  select-none  cursor-pointer transition-all duration-100`}>
              Bar Chart
            </p>

            <p onClick={() => setSelectedChart(2)} className={`${selectedChart === 2 && 'font-bold text-white'} bg-[#0C35BC] font-poppins mt-4 py-1 px-4 rounded-[4px] select-none  cursor-pointer transition-all duration-100`}>
              Line Chart
            </p>

            <p onClick={() => setSelectedChart(3)} className={`${selectedChart === 3 && 'font-bold text-white'} bg-[#0C35BC] font-poppins mt-4 py-1 px-4 rounded-[4px] select-none  cursor-pointer transition-all duration-100`}>
              Race Chart
            </p>

            <p onClick={() => setSelectedChart(4)} className={`${selectedChart === 4 && 'font-bold text-white'} bg-[#0C35BC] font-poppins mt-4 py-1 px-4 rounded-[4px]  select-none cursor-pointer transition-all duration-100`}>
              Pie Chart
            </p>

            <p onClick={() => setSelectedChart(5)} className={`${selectedChart === 5 && 'font-bold text-white'} bg-[#0C35BC] font-poppins mt-4 py-1 px-4 rounded-[4px]  select-none cursor-pointer transition-all duration-100`}>
              Raw Table
            </p>
          </div>

          <div className="w-full h-[400px] mt-3 flex justify-center items-center">
            {
              selectedChart === 1 ? <BarChart /> :
                selectedChart === 2 ? <LineChart /> :
                  selectedChart === 3 ? <RaceChart /> :
                    selectedChart === 4 ? <PieChart /> :
                      selectedChart === 5 && <RawChart />
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default ContenderStat