
import { useRef, useState } from "react"
import { IoClose, IoShareSocialSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaXTwitter, FaWhatsapp, FaCopy, FaCircleCheck, FaSpinner } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setShowShare } from "@/store/DataSlides/EventPageStatesSlide";


const EventShareCard = () => {

    const dispatch = useDispatch()

    const linkRef = useRef<HTMLSpanElement | null>(null)

    const [isLoadCopy, setIsLoadingCopy] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const handleLinkCopy = () => {
        setIsLoadingCopy(true)

        setTimeout(() => {
            navigator.clipboard.writeText(linkRef.current?.textContent as string).then(() => {
                setIsLoadingCopy(false)
                setIsCopied(true)

                setTimeout(() => {
                    setIsCopied(false)
                }, 2000)
            })
        }, 2000)
    }

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/50 flex justify-center items-center">
                <div className="relative w-[500px] max-h-[90%] overflow-auto flex items-center flex-col p-4 bg-white rounded-[10px]">

                    <div onClick={() => dispatch(setShowShare(false))} className="bg-white absolute top-[5px] right-[10px] w-[40px] h-[40px] flex justify-center items-center
                                         rounded-full cursor-pointer hover:scale-[0.8] transition-all duration-100">
                        <IoClose className="w-[25px] h-[25px]" />
                    </div>

                    <h1 className="w-full flex items-center flex-row font-poppins font-bold pt-2">
                        <IoShareSocialSharp className="w-[30px] h-[30px] mr-3" />
                        Event Share
                    </h1>

                    <hr className="w-full border-2 border-[#0C35BC] mt-2" />

                    <div className="flex justify-center items-center mt-5">
                        <span className="font-poppins font-medium">Share this event with your potential voters!</span>
                    </div>

                    <div className="flex justify-center items-center mt-4 space-x-5">
                        <Link to="" target="_blank">
                            <FaFacebook className="w-[30px] h-[30px] hover:opacity-80" />
                        </Link>

                        <Link to="" target="_blank">
                            <FaXTwitter className="w-[30px] h-[30px] hover:opacity-80" />
                        </Link>

                        <Link to="" target="_blank">
                            <FaInstagram className="w-[30px] h-[30px] hover:opacity-80" />
                        </Link>

                        <Link to="" target="_blank">
                            <FaWhatsapp className="w-[30px] h-[30px] hover:opacity-80" />
                        </Link>
                    </div>

                    <div className="w-full flex justify-center items-center space-x-5 p-3 bg-gray-200 mt-5 mb-2 rounded-[10px] border-2 border-gray-400">
                        <span ref={linkRef} className="w-[90%] font-poppins text-[14px] font-semibold text-center text-nowrap text-ellipsis overflow-hidden">https://example.com/bd2yu237dsda9d/2893e2893</span>
                        <button onClick={handleLinkCopy} className="text-black rounded group">
                            {isLoadCopy ?
                                <FaSpinner className="w-[18px] h-[18px] text-[#0C35BC] animate-spin" /> :
                                isCopied ?
                                    <FaCircleCheck className="w-[20px] h-[20px] text-[#0C35BC]" /> :
                                    <FaCopy className="w-[20px] h-[20px] text-[#0C35BC] group-hover:scale-[0.8]" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventShareCard