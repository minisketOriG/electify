
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetContenderVariables } from "@/store/DataSlides/ContenderVarSlide";
import { setShowCreate } from "@/store/DataSlides/CategoryPageStatesSlide";

//icons
import { IoMdAddCircle } from "react-icons/io"
import { FaArrowLeft, FaSpinner } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";

//components
import CategoryCard from "@/components/ClientEventComponents/CategoryCard"
import NavigationPanel from "@/components/ClientPageComponents/NavigationPanel"
import PageHeader from "@/components/ClientPageComponents/PageHeader"
import CreateCategoty from "@/components/ClientEventComponents/Modals/CategoryModals/CreateCategoty";
import CategoryShare from "@/components/ClientEventComponents/Modals/CategoryModals/CategoryShare";
import CategorySettings from "@/components/ClientEventComponents/Modals/CategoryModals/CategorySettings";


const VotingEventCategories = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categoryStates = useSelector((state: any) => state.categorypage.categoryPageStates)


  const [isCreateCatShowLoading, setIsCreateCatShowLoading] = useState<boolean>(false)

  const showCreateCategory = () => {
    setIsCreateCatShowLoading(true)

    dispatch(resetContenderVariables())

    setTimeout(() => {
      setIsCreateCatShowLoading(false)
      dispatch(setShowCreate(true))
    }, 1000)
  }


  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <PageHeader type="clientPage" />

        <main className="bg-gray-200 flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="votingevents" />

            <div className="w-full h-auto p-10">
              <h1 className="flex items-center text-black font-poppins font-semibold text-[14px]">
                <FaArrowLeft onClick={() => { navigate(-1) }} className="w-[20px] h-[20px] mr-2 cursor-pointer hover:scale-[1.2] transition-all duration-100" />
                Voting Events {">"} Gambisa Awards
              </h1>

              <hr className="my-2" />

              <div className="flex items-center my-8 flew-row font-poppins font-bold text-[14px] text-[#0C35BC]">
                <BsFillInfoCircleFill className="mr-2" />
                This event is scheduled for 2nd, June, 2018 : 10:00 AM
              </div>

              <div className="flex items-center my-8 flew-row font-poppins font-bold text-[14px] text-red-500">
                <BsFillInfoCircleFill className="mr-2" />
                This event is closed for voting
              </div>

              <div className="w-full flex justify-center items-center my-5 space-x-5">
                <button onClick={showCreateCategory} className="w-[450px] h-[60px] bg-[#0C35BC] flex justify-center items-center text-white px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                 text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                  {isCreateCatShowLoading ?
                    <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" /> :
                    <IoMdAddCircle className="w-[30px] h-[30px] mr-2" />
                  }
                  Add new category
                </button>
              </div>

              <div className="">
                <h2 className="text-[16px] py-2 font-poppins font-semibold">Categories</h2>

                <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col">
                  <CategoryCard />
                  <CategoryCard />
                  <CategoryCard />
                  <CategoryCard />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}

      {categoryStates.showCreate && <CreateCategoty />}
      {categoryStates.showShare && <CategoryShare />}
      {categoryStates.showSettings && <CategorySettings />}

    </>
  )
}

export default VotingEventCategories