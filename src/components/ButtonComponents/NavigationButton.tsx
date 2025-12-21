
import { Link } from "react-router-dom"
import { NavigationButtonProps } from "../../interfaces/interfaces"

const NavigationButton = (props: NavigationButtonProps) => {
    return (
        <>
            {props.type == "active" ?
                <Link to={props.link}>
                    <button className="flex justify-center items-center flex-row bg-white text-black text-[14px] 
                             w-[95%] h-[40px] rounded-[0px_5px_5px_0px] my-2 cursor-pointer font-semibold transition-all duration-100">
                        {props.icon}
                        <span className="font-poppins">{props.title}</span>
                    </button>
                </Link>
                :
                <Link to={props.link}>
                    <button className="flex justify-center items-center flex-row bg-black text-white text-[12px] 
                      w-[95%] h-[40px] rounded-[0px_5px_5px_0px] my-2 font-medium cursor-pointer hover:text-[14px] hover:font-semibold transition-all duration-100">
                        {props.icon}
                        <span className="font-poppins">{props.title}</span>
                    </button>
                </Link>
            }
        </>
    )
}

export default NavigationButton