

import { BiSolidDashboard } from "react-icons/bi";
import { IoBarChart, IoSettingsSharp } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai"
import NavigationButton from "../ButtonComponents/NavigationButton";
import { NavigationPanelProps } from "../../interfaces/interfaces";
import { TbMessageReportFilled } from "react-icons/tb";
import images from "../../utils/AssetsUtils";



const NavigationPanel = (props: NavigationPanelProps) => {
  return (
    <>
      <div className="flex items-center flex-col sticky left-0 top-0 bottom-0 bg-black w-[380px] h-full">
        <section className="flex justify-center items-center flex-col w-full mt-10">
          <img className="w-30 h-30 rounded-full border-4 border-white outline-4 outline-offset-8 outline-white/50"
            src={images.avatarDemo} alt="" />
          <span className="text-white text-[15px] font-poppins font-semibold mt-8">LINDA ADUBEA</span>
        </section>

        <section className="w-full mt-10">
          <NavigationButton type={props.type == "dashboard" ? "active" : "noactive"} link="/clientPage/dashboard" title="Dashboard" icon={<BiSolidDashboard className="w-[20px] h-[20px] mr-2" />} />

          <NavigationButton type={props.type == "votingevents" ? "active" : "noactive"} link="/clientPage/votingevents" title="Voting Events" icon={<IoBarChart className="w-[20px] h-[20px] mr-2" />} />

          <NavigationButton type={props.type == "transactions" ? "active" : "noactive"} link="/clientPage/transactions" title="Transactions" icon={<AiOutlineTransaction className="w-[20px] h-[20px] mr-2" />} />

          <NavigationButton type={props.type == "accountsettings" ? "active" : "noactive"} link="/clientPage/accountsettings" title="Account Settings" icon={<IoSettingsSharp className="w-[20px] h-[20px] mr-2" />} />

          <NavigationButton type={props.type == "report" ? "active" : "noactive"} link="/clientPage/reportissue" title="Report Issue" icon={<TbMessageReportFilled className="w-[20px] h-[20px] mr-2" />} />
        </section>
      </div>
    </>
  )
}

export default NavigationPanel