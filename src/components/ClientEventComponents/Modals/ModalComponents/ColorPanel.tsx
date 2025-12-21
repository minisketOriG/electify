
import { useState } from "react"
import { EventColorPanelProps } from "../../../../interfaces/interfaces"
import { colors } from "../../../../utils/DataUtils"


const ColorPanel = (props: EventColorPanelProps) => {

    const [selectedColor, setSelectedColor] = useState<number>(0)

    const handleColorSelect = (color: number) => {
        setSelectedColor(color);

        props.setSelectedFlagColor(color);
    }

    return (
        <>
            <section className="w-[95%] flex justify-center items-center flex-col mt-2">
                <p className="w-full my-2 font-poppins font-semibold text-[14px]">Event Flag Color</p>

                <div className="flex justify-center items-center flex-row space-x-5">
                    {colors?.map((item, index) => (
                        <div key={index} onClick={() => handleColorSelect(index)} className={`flex justify-center items-center w-[40px] h-[40px] rounded-full my-2 cursor-pointer ${selectedColor === index ? "outline-[#0C35BC] outline-4 outline-offset-4" : ""}`}>
                            <span
                                className={`w-full h-full ${item.color} rounded-full`}
                            ></span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ColorPanel