import { FaInfoCircle } from "react-icons/fa"
import { FaSpinner } from "react-icons/fa6"
import { Link } from "react-router-dom"
import AuthButton from "../ButtonComponents/AuthButton"
import { useState } from "react"
import { SignInIntroProps } from "../../interfaces/interfaces"
import images from "../../utils/AssetsUtils"



const SignInIntro = (props: SignInIntroProps) => {


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);


  function handleSignIntro() {
    setIsLoading(true);
    setIsDisabled(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
      props.setIsIntro(false)
      props.setIsSuccessful(true)
    }, 3000);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-row p-4 w-[800px] h-full bg-gradient-to-r from-[#040405] to-[#5D5959] rounded-lg shadow-[0px_0px_10px_#0C35BC]">
        <section className="flex justify-center items-center flex-col w-1/2 h-full">
          <img className="w-[50px] h-[50px] mb-5" src={images.electifyLogo} alt="electifyLogo" />
          <p className="text-white text-xl font-poppins font-bold">Sign Into Your Account</p>

          <div className="flex justify-center items-center flex-col w-full mt-15">
            <p className="text-white text-[15px] font-bagel mb-5">ONE CLICK SIGN IN</p>
            <AuthButton type="google" disabled={isDisabled} setIsDisabled={setIsDisabled} />
            <AuthButton type="apple" disabled={isDisabled} setIsDisabled={setIsDisabled} />
          </div>
        </section>

        <section className="bg-white flex justify-center items-center flex-col w-1/2 h-full rounded-md">
          <p className="text-black text-xl font-poppins font-bold">SIGN IN</p>

          <div className="w-[85%] mt-5">
            <span className="text-black text-[14px] font-poppins font-semibold">Email Address</span>
            <input className="w-full h-[40px] font-poppins font-medium text-[12px] my-2 rounded-md border-1 border-[#0C35BC] p-2 shadow-[4px_4px_0px_#0C35BC] 
                            focus:text-[14px] focus:font-semibold focus:outline-2 focus:outline-[#0C35BC] focus:shadow-[-4px_-4px_0px_#0C35BC] transition-all duration-200"
              type="email" placeholder="Enter your email address" />
          </div>

          <div className="w-[85%] mt-2">
            <span className="text-black text-[14px] font-poppins font-semibold">Password</span>
            <input className="w-full h-[40px] font-poppins font-medium text-[12px] my-2 rounded-md border-1 border-[#0C35BC] p-2 shadow-[4px_4px_0px_#0C35BC] 
                            focus:text-[14px] focus:font-semibold focus:outline-2 focus:outline-[#0C35BC] focus:shadow-[-4px_-4px_0px_#0C35BC] transition-all duration-200"
              type="password" placeholder="Enter your password" />
          </div>


          <div className="flex justify-center items-center w-[85%] mt-5">
            <FaInfoCircle className="w-[15px] h-[15px] mr-2" />
            <span className="text-black text-[10px] font-poppins ">
              If you do not have an account, please click here
              <Link className="font-semibold cursor-pointer text-[#0C35BC] hover:font-bold" to="/auth/signup"> Create Account</Link>
            </span>
          </div>

          <button className="flex justify-center items-center w-[70%] h-[40px] bg-[#0C35BC] mt-5 text-white text-[12px] font-poppins font-semibold cursor-pointer rounded-md border-2 border-[#0C35BC]
                          disabled:opacity-80 disabled:pointer-events-none hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-300"
            onClick={handleSignIntro} disabled={isDisabled}>
            {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
            SIGN INTO ACCOUNT
          </button>
        </section>
      </div>
    </>
  )
}

export default SignInIntro