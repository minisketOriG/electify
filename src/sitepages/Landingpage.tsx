
import { NavLink } from "react-router-dom";

//components
import PageFooter from "../components/ClientPageComponents/PageFooter";
import PageHeader from "../components/ClientPageComponents/PageHeader";

//icons
import { IoIosArrowDropdownCircle } from "react-icons/io";

//images
import images from "../utils/AssetsUtils";


const Landingpage = () => {

  return (
    <>
      <PageHeader type="landingPage" />

      <main className="bg-gray-200">
        <div className="landing-heroSection">
          <h1 className="font-titan text-black text-6xl"><span className="text-[#0C35BC]">ELECTiFY</span> DECiSiONS</h1>
          <h2 className="font-titan text-black text-6xl">THROUGH VOTES</h2>

          <img src={images.electifyLogoBlack} alt="heroImg" className="w-[120px] h-[70px] my-10" />

          <p className="font-hachi text-black text-xl">Your number one readily available voting platform</p>

          <a href="#hero_section_47d9a"><IoIosArrowDropdownCircle className="w-[50px] h-[50px] text-black text-4xl mt-10 animate-bounce" /></a>
        </div>

        <div id="hero_section_47d9a" className="w-full h-[500px] bg-gradient-to-r from-[#040405] to-[#5D5959]">
          <div className="flex items-center justify-around w-full h-full">
            <section>
              <h3 className="font-poppins font-bold text-center text-white text-4xl">
                Just like people cast <br /> ballots in a physical form, <br />
                <p className="font-poppins text-white text-2xl mt-20"><span className="text-[#0C35BC] font-bagel">ELECTiFY</span> is your online solution.</p>
              </h3>
            </section>

            <section>
              <img src={images.ballotImg} alt="ballotImg" className="w-[250px] h-[300px]" />
            </section>
          </div>
        </div>


        <div className="flex items-center justify-center w-full flex-col py-10">
          <h1 className="font-titan font-bold text-center text-black text-4xl">JOIN US NOW AND GET THE CHANCE TO</h1>

          <section className="flex items-center justify-center py-10">
            <div className="relative flex flex-col items-center h-[500px]">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-600 z-0" style={{ transform: 'translateX(-50%)' }}></div>
              <div className="flex flex-col justify-between h-full z-10">
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
                <div className="landing-bullet-container active-bullet">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-[#0C35BC]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-[560px] ml-10 ">
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">Create various voting events and also add preferred categories</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">Allow contenders to share links to their category</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">Set your voting event schedule and allowed time-frame</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">See real-time statistics and analytics of your voting events</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">Get the overall results of your event with statistical charts</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts">Create both cost-based and free-tier voting for voters</p>
              </div>
              <div className="flex items-center h-1/4">
                <p className="landing-bullet-texts"><span className="text-[#0C35BC]">..............</span> and many more.</p>
              </div>
            </div>
          </section>

          <NavLink to="/auth/signup"><button className="landing-join-button">JOIN US NOW</button></NavLink>
        </div>


        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#040405] to-[#5D5959]">
          <p className="w-full text-center text-white text-4xl font-semibold py-10">
            Our pay-as-you-go model ensure that you only <br /> spend according to what you want.
          </p>

          <img className="w-[600px] h-[400px] " src={images.cardImg} alt="Credit Card " />

          <p className="w-full text-center text-[#0C35BC] text-2xl font-semibold py-10">
            Pay as low as $0.5 for each added category and as low as <br /> $0.2 for each added contender
          </p>
        </div>

        <div className="landing-billing">
          <p className="w-full font-titan text-center text-black text-4xl font-bold py-5">
            TO SET UP YOUR ACCOUNT AS A CLIENT
          </p>

          <p className="w-full text-center text-[#0C35BC] text-8xl font-poppins font-bold pt-2">
            JUST PAY
          </p>

          <p className="w-full text-center text-[#0C35BC] text-[150px] font-poppins font-bold pt-2">
            $20
          </p>

          <p className="w-full font-titan text-center text-black text-4xl font-bold py-5">
            TO GET STARTED
          </p>
        </div>
      </main>

      <PageFooter />

    </>
  )
}

export default Landingpage