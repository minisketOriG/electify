
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"
import { FaSpinner } from "react-icons/fa6"
import { SignUpCredentialsProps } from "../../interfaces/interfaces";



const SignUpCredentials = (props: SignUpCredentialsProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
  
  
    function handleSignCredentials() {
      setIsLoading(true);
      setIsDisabled(true);
    
      setTimeout(() => {
        setIsLoading(false);
        setIsDisabled(false);
        props.setCredentials(false)
        props.setAccountCreated(true)
      }, 3000);
    }

  return (
    <>
        <div className="flex justify-center items-center flex-row p-4 w-[420px] h-full bg-gradient-to-r from-[#040405] to-[#5D5959] rounded-lg shadow-[0px_0px_10px_#0C35BC]">
                  <section className="bg-white flex justify-center items-center flex-col w-full h-full rounded-md">
                    <p className="text-black text-[14px] font-poppins font-bold">SET ACCOUNT CREDENTIALS</p>

                     <div className="w-[85%] mt-1">
                          <span className="text-black text-[12px] font-poppins font-semibold">Username</span>
                          <input className="w-full h-[40px] font-poppins font-medium text-[12px] my-1 rounded-md border-1 border-[#0C35BC] p-2 shadow-[4px_4px_0px_#0C35BC] 
                            focus:text-[14px] focus:font-semibold focus:outline-2 focus:outline-[#0C35BC] focus:shadow-[-4px_-4px_0px_#0C35BC] transition-all duration-200" 
                          type="text" placeholder="Enter your username"/>
                     </div>

                     <div className="w-[85%] mt-1">
                          <span className="text-black text-[12px] font-poppins font-semibold">Your Password</span>
                          <input className="w-full h-[40px] font-poppins font-medium text-[12px] my-1 rounded-md border-1 border-[#0C35BC] p-2 shadow-[4px_4px_0px_#0C35BC] 
                            focus:text-[14px] focus:font-semibold focus:outline-2 focus:outline-[#0C35BC] focus:shadow-[-4px_-4px_0px_#0C35BC] transition-all duration-200" 
                          type="password" placeholder="Enter your Password"/>
                     </div>

                     <div className="w-[85%] mt-1">
                          <span className="text-black text-[12px] font-poppins font-semibold">Confirm Password</span>
                          <input className="w-full h-[40px] font-poppins font-medium text-[12px] my-1 rounded-md border-1 border-[#0C35BC] p-2 shadow-[4px_4px_0px_#0C35BC] 
                            focus:text-[14px] focus:font-semibold focus:outline-2 focus:outline-[#0C35BC] focus:shadow-[-4px_-4px_0px_#0C35BC] transition-all duration-200" 
                          type="password" placeholder="Confirm your password"/>
                     </div>

                     <div className="flex justify-center items-center w-[85%] mt-1">
                         <FaInfoCircle className="w-[20px] h-[20px] mr-2"/>
                          <span className="text-black text-[10px] font-poppins ">
                          Passwords are secured in our system through encryption so be rest assured that your account is safe
                         </span>                        
                     </div>

                     <button className="flex justify-center items-center w-[70%] h-[40px] bg-[#0C35BC] mt-4 text-white text-[12px] font-poppins font-semibold cursor-pointer rounded-md border-2 border-[#0C35BC]
                          disabled:opacity-80 disabled:pointer-events-none hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-300"
                          onClick={handleSignCredentials} disabled={isDisabled}>
                           {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin"/>}
                           Confirm Account Credentials
                     </button>
                  </section>
              </div>
    </>
  )
}

export default SignUpCredentials