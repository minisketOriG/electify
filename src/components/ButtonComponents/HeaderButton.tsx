
import { NavLink, useNavigate } from "react-router-dom"
import { HeaderButtonProps } from "../../interfaces/interfaces"
import { FaSpinner } from "react-icons/fa6"
import { useState } from "react";


const HeaderButton = (props: HeaderButtonProps) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);


  function handleLogout() {
    setIsLoading(true);
    setIsDisabled(true);


    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
      navigate("/auth/signin");
    }, 3000);
  }

  return (
    <>
      {props.action ?
        <button className="flex justify-center items-center bg-white rounded-[10px] w-[120px] border-2 border-white/50 cursor-pointer  disabled:opacity-80 disabled:pointer-events-none hover:bg-black hover:text-white"
          onClick={handleLogout} disabled={isDisabled}>
          {isLoading && <FaSpinner className="w-[14px] h-[14px] animate-spin" />}
          <p className="flex justify-center items-center p-[5px] text-[12px] font-poppins font-semibold">
            {props.icon}
            <span className="ml-2"> {props.text} </span>
          </p>
        </button>
        :
        <button className="flex justify-center items-center bg-white rounded-[10px] w-[120px] border-2 border-white/50 hover:bg-black hover:text-white">
          <NavLink to={props.link || '#'} className="flex justify-center items-center p-[5px] text-[12px] font-poppins font-semibold">
            {props.icon}
            <span className="ml-2"> {props.text} </span>
          </NavLink>
        </button>
      }
    </>
  )
}

export default HeaderButton