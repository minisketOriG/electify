
import { useDispatch, useSelector } from "react-redux"
import { addContenderVariable } from "@/store/DataSlides/ContenderVarSlide"

import { reqtype, vartype } from "@/interfaces/enums"
import { AddVariableProps } from "@/interfaces/interfaces"
import { useRef, useState } from "react"
import { FaSpinner } from "react-icons/fa6"
import { IoMdAddCircleOutline } from "react-icons/io"
import { IoClose } from "react-icons/io5"

const AddVariable = (props: AddVariableProps) => {

    const dispatch = useDispatch()
    const contenderVariables = useSelector((state: any) => state.contenderVariables.contenderVariables)
    

    const variableNameRef = useRef<HTMLInputElement | null>(null)
    const variableTypeRef = useRef<HTMLSelectElement | null>(null)
    const requirementTypeRef = useRef<HTMLSelectElement | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleAddVariable = () => {
        setIsLoading(true)

        const variableName = variableNameRef.current?.value
        const variableType = variableTypeRef.current?.value
        const requirementType = requirementTypeRef.current?.value

        if (!variableName || !variableType || !requirementType) {

            if (!variableName) variableNameRef.current?.classList.add("border-red-500"); else variableNameRef.current?.classList.remove("border-red-500")
            if (!variableType) variableTypeRef.current?.classList.add("border-red-500"); else variableTypeRef.current?.classList.remove("border-red-500")
            if (!requirementType) requirementTypeRef.current?.classList.add("border-red-500"); else requirementTypeRef.current?.classList.remove("border-red-500")

            setIsLoading(false)
            return
        } else {

            variableNameRef.current?.classList.remove("border-red-500")
            variableTypeRef.current?.classList.remove("border-red-500")
            requirementTypeRef.current?.classList.remove("border-red-500")

            setTimeout(() => {

                const isVariableExist = contenderVariables.some((variable: any) => variable.name === variableName)

                if (isVariableExist) {
                    variableNameRef.current?.classList.add("border-red-500")
                    setIsLoading(false)
                    return
                } else {
                    const variableData = {
                        variableName,
                        variableType,
                        requirementType
                    }

                    setIsLoading(false)
                    props.setIsShowVariableAdd(false)

                    dispatch(addContenderVariable(variableData))
                }

            }, 2000);

        }

    }

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20 flex 
            justify-center items-center rounded-[10px]">
                <div className="relative w-4/5 bg-white p-4 rounded-[10px] flex items-center flex-col">

                    <div onClick={() => props.setIsShowVariableAdd(false)} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                        rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row text-[14px] font-poppins font-bold pt-2">
                        <IoMdAddCircleOutline className="w-[20px] h-[20px] mr-2" />
                        Add Variable
                    </h1>

                    <hr className="w-full border-1 border-[#0C35BC] mt-1" />

                    <section className="w-[90%] flex justify-center items-center flex-col mt-1">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Variable Name</p>
                        <input ref={variableNameRef} maxLength={15} className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Variable Name" />
                    </section>

                    <section className="w-[90%] flex justify-center items-center flex-col mt-1">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Variable Type</p>
                        <select ref={variableTypeRef} className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="">Set Variable Type</option>

                            {Object.values(vartype).map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </section>

                    <section className="w-[90%] flex justify-center items-center flex-col mt-1">
                        <p className="w-full my-2 font-poppins font-semibold text-[14px]">Requirement Type</p>
                        <select ref={requirementTypeRef} className="w-full font-poppins font-semibold text-[14px] caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2">
                            <option value="">Set Requirement Type</option>

                            {Object.values(reqtype).map((type, index) => (
                                type !== reqtype.default && <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </section>

                    <section className="w-[95%] flex justify-center items-center flex-col mt-4">
                        <button onClick={handleAddVariable} className="w-[90%] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                                text-[14px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[#0C35BC] transition-all duration-200">
                            {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                            Add new variable
                        </button>
                    </section>

                </div>
            </div>
        </>
    )
}

export default AddVariable