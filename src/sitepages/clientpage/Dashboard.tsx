


import { Link } from 'react-router-dom';
import EventStatCard from '../../components/MainPageStats/EventStatCard';
import NavigationPanel from '../../components/ClientPageComponents/NavigationPanel';
import PageHeader from '../../components/ClientPageComponents/PageHeader';
import RevenueStatCard from '../../components/MainPageStats/RevenueStatCard';
import RevenueDescription from '../../components/MainPageStats/RevenueDescription';
import VotingActivityStat from '../../components/MainPageStats/VotingActivityStats';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <PageHeader type="clientPage" />

        <main className="bg-gray-200 flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="dashboard" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Dashboard</h1>
              <hr className="my-2" />

              <div className="flex items-center flex-col w-full py-4">
                <h2 className="w-full text-center text-black font-poppins font-semibold text-[16px]">Events Statistics</h2>

                <section className="flex justify-center items-center w-full mt-5 space-x-5">
                  <EventStatCard title="Total Number of Events" amount={5} />
                  <EventStatCard title="Votes Accumulated" amount={5000} />
                  <EventStatCard title="Active Events" amount={15} />
                </section>

                <Link className="mt-8 cursor-pointer" to="/clientpage/votingevents">
                  <button className="bg-[#0C35BC] w-[400px] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold py-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                    GO TO EVENTS PAGE
                  </button>
                </Link>
              </div>

              <div className="flex items-center flex-col w-full py-4">
                <h2 className="w-full text-center text-black font-poppins font-semibold text-[16px]">Voting Revenue Breakdown & Statistics</h2>

                <section className="flex justify-center items-center w-full mt-5 space-x-5">
                  <RevenueStatCard title="GROSSS REVENUE" amount={50} />
                  <RevenueDescription />
                  <RevenueStatCard title="NET REVENUE" amount={45} />
                </section>

                <Link className="mt-8 cursor-pointer" to="/fundspage/withdrawfunds">
                  <button className="bg-[#0C35BC] w-[400px] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold py-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                    Make a withdrawal
                  </button>
                </Link>
              </div>

              <VotingActivityStat />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard