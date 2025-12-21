

import { useState } from "react";
import SignInIntro from "../../components/ManualSignInComponents/SignInIntro";
import SignInSuccess from "../../components/ManualSignInComponents/SignInSuccess";


const SignInPage = () => {

  const [isIntro, setIsIntro] = useState<boolean>(true);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  return (
      <>
          <main className="w-full h-screen flex justify-center items-center">
           <div className="flex justify-center items-center flex-col w-fit h-[500px] space-y-5">
             <h1 className="text-[#0C35BC] text-5xl mb-10 font-bagel font-semibold">Electify Authentication</h1>

            { isIntro && <SignInIntro setIsIntro={setIsIntro} setIsSuccessful={setIsSuccessful}/>}
           
            { isSuccessful && <SignInSuccess />}

            </div>
          </main>
      </>
  )
}

export default SignInPage