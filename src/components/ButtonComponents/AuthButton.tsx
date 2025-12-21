
import { useState } from "react";
import { AuthButtonProps } from "../../interfaces/interfaces"


import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaSpinner } from "react-icons/fa";


const AuthButton = (props: AuthButtonProps) => {

  let text: string = "";
  let icon: React.ReactNode = null;
  let action: (() => void) | null = null;

  const [isLoading, setIsLoading] = useState<boolean>(false);


  function handleGoogleSignUp() {
    setIsLoading(true);
    props.setIsDisabled(true);
    setTimeout(() => {
      setIsLoading(false);
      props.setIsDisabled(false);
    }, 3000);
  }

  function handleAppleSignUp() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }


  if (props.type === "google") {
    text = "Continue with Google";
    icon = <FcGoogle className="w-[20px] h-[20px]" />;
    action = handleGoogleSignUp;
  } else if (props.type === "apple") {
    text = "Continue with Apple";
    icon = <FaApple className="w-[20px] h-[20px]" />;
    action = handleAppleSignUp;
  }


  return (
    <>
      <button className="flex justify-center items-center flex-row bg-white rounded-lg w-[80%] h-[40px] cursor-pointer
                px-3 mb-4 space-x-5 font-poppins font-regular border-1 border-white disabled:opacity-80 disabled:pointer-events-none
                hover:bg-black hover:text-white hover:font-bold transition-all duration-300"
        onClick={action || (() => { })} disabled={props.disabled}>
        {isLoading ? <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" /> : icon}
        <span className="text-current text-[14px]">{text}</span>
      </button>
    </>
  )
}

export default AuthButton