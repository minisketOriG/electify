


import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const UserAccountPasswordSettings = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false);


    function handleSaveChanges() {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate("/voterpage/categorycheckout/121922612961782")
        }, 1000);
    }


    return (
        <>
            <div className="w-full flex justify-center items-center flex-col py-3">
                <p className="font-poppins font-semibold my-2">User Account Password</p>

                <section className="flex justify-center items-center w-full py-4 space-x-5">
                    <input className="w-[350px] font-poppins caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="password" placeholder="Enter New Password" />
                    <input className="w-[350px] font-poppins caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="password" placeholder="Confirm New Password" />
                </section>

                <button onClick={handleSaveChanges} className="w-[280px] flex justify-center items-center bg-[#0C35BC] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-4 py-3 my-2 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                        {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                        Change Account Password
                </button>
            </div>
        </>
    )
}

export default UserAccountPasswordSettings