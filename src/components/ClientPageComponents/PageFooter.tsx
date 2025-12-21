
import { FaBlog, FaSheetPlastic, FaFacebook, FaXTwitter, FaInstagram, FaCopyright } from "react-icons/fa6"
import { IoHome, IoBusiness, IoInformationCircle, IoMail } from "react-icons/io5"
import { MdLocationOn, MdPrivacyTip } from "react-icons/md"
import { FaSpinner } from "react-icons/fa";

import { NavLink, Link } from "react-router-dom"
import { useState, useRef, ChangeEvent } from "react";
import images from "../../utils/AssetsUtils";


const PageFooter = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputtext, setInputText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);


  function handleSubscribe() {
    if (inputtext.trim() === "") {
      inputRef.current?.focus();
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }


  return (
    <footer>
      <div className="w-full h-fit bg-black p-5">
        <section className="flex items-center justify-start flex-row p-10">
          <img className="w-[50px] h-[50px]" src={images.electifyLogo} alt="electifyLogo" />
          <span className="font-bagel text-white text-3xl font-bold ml-[10px]">Electify</span>
        </section>

        <section className="grid grid-cols-3 place-items-center place-content-center flex-row ">
          <div className="flex justify-start flex-col text-white text-lg font-poppins font-light">
            <NavLink to="/" className="flex items-center text-start"><IoHome className="w-[20px] h-[20px] mr-2" />Home</NavLink>
            <NavLink to="/accesspage/services" className="flex items-center text-start"><IoBusiness className="w-[20px] h-[20px] mr-2" />Services</NavLink>
            <NavLink to="/accesspage/about" className="flex items-center text-start"><IoInformationCircle className="w-[20px] h-[20px] mr-2" />About</NavLink>
          </div>

          <div className="flex justify-start flex-col text-white text-lg font-poppins font-light">
            <p className="font-bold text-center text-xl">Get in touch</p>
            <p className="flex items-center"><IoMail className="w-[20px] h-[20px] mr-2" /> electifyVotesBus@gmail.com</p>
            <p className="flex items-center"><MdLocationOn className="w-[20px] h-[20px] mr-2" /> CL Street 123, Accra, Ghana</p>
          </div>

          <div className="flex justify-start flex-col text-white text-lg font-poppins font-light">
            <NavLink to="/accesspage/blogs" className="flex items-center text-start"><FaBlog className="w-[20px] h-[20px] mr-2" />Blogs and Announcements</NavLink>
            <NavLink to="/accesspage/privacy" className="flex items-center text-start"><MdPrivacyTip className="w-[20px] h-[20px] mr-2" />Privacy Policy</NavLink>
            <NavLink to="/accesspage/terms" className="flex items-center text-start"><FaSheetPlastic className="w-[20px] h-[20px] mr-2" />Terms of service</NavLink>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col py-8 text-white  font-poppins font-semibold">
          <p className="text-3xl">Visit our social media platforms</p>

          <div className="flex items-center pt-5 space-x-8">
            <Link to="https://www.facebook.com/profile.php?id=10008891222222222" target="_blank"><FaFacebook className="w-[40px] h-[40px]" /></Link>
            <Link to="https://www.twitter.com/profile.php?id=10008891222222222" target="_blank"><FaXTwitter className="w-[40px] h-[40px]" /></Link>
            <Link to="https://www.instagram.com/profile.php?id=10008891222222222" target="_blank"><FaInstagram className="w-[40px] h-[40px]" /></Link>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col text-white font-poppins font-semibold">
          <p className="text-xl p-0">To receive latest updates, please subscribe to our newsletter</p>

          <div className="flex items-center justify-center py-5">
            <div className="bg-white flex items-center justify-center p-2 rounded-md space-x-2">
              <input className="landing-subscribe-input" type="email" placeholder="Enter your email here" ref={inputRef} onChange={handleInputChange} />
              <button className="landing-subscribe-button" onClick={handleSubscribe}>
                {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white flex items-center justify-center py-8">
        <FaCopyright className="w-[40px] h-[40px] mr-5" />
        <p className="text-black text-center text-3xl font-poppins font-semibold"> Copyright 2025</p>
      </section>
    </footer>
  )
}

export default PageFooter