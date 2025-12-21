import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

//icons
import { FaSpinner } from "react-icons/fa6"
import { IoClose, IoSettingsSharp } from "react-icons/io5"
import { MdModeEdit } from "react-icons/md"

//stateHandlers
import { setShowSettings } from "@/store/DataSlides/CategoryPageStatesSlide"

//components
import ColorPanel from "../ModalComponents/ColorPanel"
import EditVariable from "../ModalComponents/EditVariable"
import CostSetter from "../ModalComponents/CostSetter"


const CategorySettings = () => {

  const dispatch = useDispatch()
  const categoryStates = useSelector((state: any) => state.categorypage.categoryPageStates)
  const contenderVariables = useSelector((state: any) => state.contenderVariables.contenderVariables)


  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedFlagColor, setSelectedFlagColor] = useState<number>(0)

  const handleCreateCategory = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const [isShowVariableEdit, setIsShowVariableEdit] = useState<boolean>(false)
  const [variableId, setVariableId] = useState<number>(-1)

  const handleEditVariable = (id: number) => {
    setVariableId(id)
    setIsShowVariableEdit(true)
  }

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50 flex justify-center items-center">
        <div className="relative w-[500px] max-h-[90%] overflow-auto flex items-center flex-col p-4 bg-white rounded-[10px]">

          <div onClick={() => dispatch(setShowSettings(false))} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                                    rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
            <IoClose className="w-[25px] h-[25px]" />
          </div>

          <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
            <IoSettingsSharp className="w-[20px] h-[20px] mr-3" />
            Category Settings
          </h1>

          <hr className="w-full border-2 border-[#0C35BC] mt-2" />

          <section className="w-[95%] flex justify-center items-center flex-col mt-2">
            <p className="w-full my-2 font-poppins font-semibold text-[14px]">Category Name</p>
            <input className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Category Name" />
          </section>

          {categoryStates.eventType === "cost" &&
            <section className="w-[95%] flex justify-center items-center flex-col mt-2">
              <p className="w-full my-2 font-poppins font-semibold text-[14px]">Category Cost Per Vote</p>
             
              <CostSetter />
            </section>
          }

          <ColorPanel selectedFlagColor={selectedFlagColor} setSelectedFlagColor={setSelectedFlagColor} />

          <section className="w-[95%] flex justify-center items-center flex-col mt-2">
            <p className="w-full my-2 font-poppins font-semibold text-[14px]">Contender Description Variables</p>

            <div className="w-full flex justify-center items-start flex-wrap  p-2 my-2 border-4 border-[#0C35BC] rounded-[10px]">
              {contenderVariables.map((item: any) => {
                return (
                  <p key={item.id} className="bg-[#0C35BC] m-1 py-1 px-2 flex items-center flex-row font-poppins text-[12px] text-white rounded-[5px]">
                    <span className="font-bold">{item.name} {"·"}</span>
                    <span className="font-medium">[{item.requirement} {item.type}]</span>
                    <MdModeEdit className="w-[18px] h-[18px] cursor-pointer mx-1" onClick={() => handleEditVariable(item.id)} />
                  </p>
                )
              })
              }
            </div>
          </section>

          <section className="w-[95%] flex justify-center items-center flex-col mt-2 mb-2">
            <button onClick={handleCreateCategory} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                      text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:font-bold hover:text-[#0C35BC] transition-all duration-200">
              {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
              Update Category Settings
            </button>
          </section>

          {/* Variable Modals */}
          {isShowVariableEdit && <EditVariable variableId={variableId} setIsShowVariableEdit={setIsShowVariableEdit} />}

        </div>
      </div>
    </>
  )
}

export default CategorySettings