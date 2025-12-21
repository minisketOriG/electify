

import { useState } from "react";

//components
import SignUpIntro from "../../components/ManualSignupComponents/SignUpIntro";
import SignUpVerify from "../../components/ManualSignupComponents/SignUpVerify";
import SignUpVerifyConfirmed from "../../components/ManualSignupComponents/SignUpVerifyConfirmed";
import SignUpCredentials from "../../components/ManualSignupComponents/SignUpCredentials";
import SignUpAccountCreated from "../../components/ManualSignupComponents/SignUpAccountCreated";


const SignUpPage = () => {

  const [isIntro, setIsIntro] = useState<boolean>(true);
  const [isVerify, setIsVerify] = useState<boolean>(false);
  const [isVerifyConfirmed, setIsVerifyConfirmed] = useState<boolean>(false);
  const [isVerifySuccess, setIsVerifySuccess] = useState<boolean>(false)
  const [isCredentials, setCredentials] = useState<boolean>(false)
  const [isAccountCreated, setAccountCreated] = useState<boolean>(false)
  
  return (
    <>
       <main className="w-full h-screen flex justify-center items-center">
           <div className="flex justify-center items-center flex-col w-fit h-[500px] space-y-5">
             <h1 className="text-[#0C35BC] text-5xl mb-10 font-bagel font-semibold">Electify Authentication</h1>

              { isIntro && <SignUpIntro setIsIntro={setIsIntro} setIsVerify={setIsVerify} /> }

              { isVerify && <SignUpVerify setIsVerify={setIsVerify} setIsVerifyConfirmed={setIsVerifyConfirmed} setIsVerifySuccess={setIsVerifySuccess}/>}

              { isVerifyConfirmed && <SignUpVerifyConfirmed isVerifySuccess={isVerifySuccess} setIsVerifyConfirmed={setIsVerifyConfirmed} setIsVerifySuccess={setIsVerifySuccess} setCredentials={setCredentials} /> }

              { isCredentials && <SignUpCredentials  setCredentials={setCredentials} setAccountCreated={setAccountCreated} />}

              { isAccountCreated && <SignUpAccountCreated />}

           </div>
       </main>
    </>
  )
}

export default SignUpPage