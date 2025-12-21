
import NavigationPanel from '../../components/ClientPageComponents/NavigationPanel'
import PageHeader from '../../components/ClientPageComponents/PageHeader'

import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import TransactionTable from '../../components/MainPageStats/TransactionTable';
import { Link } from 'react-router-dom';

const Transactions = () => {
  return (
    <>
      <div className="flex justify-center flex-col w-full h-screen">
        <PageHeader type="clientPage" />

        <main className="bg-gray-200 flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="transactions" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Transactions</h1>
              <hr className="my-2" />

              <section className="w-full flex justify-center items-center mt-10 space-x-10">
                <Link to="/fundspage/depositfunds">
                  <button className="flex justify-center items-center bg-[#0C35BC] w-[400px] cursor-pointer text-[16px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-5 py-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                    <PiHandDepositFill className="w-[25px] h-[25px] mr-4" />
                    Deposit Funds
                  </button>
                </Link>

                <Link to="/fundspage/withdrawfunds">
                  <button className="flex justify-center items-center bg-[#0C35BC] w-[400px] cursor-pointer text-[16px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-5 py-3 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                    <PiHandWithdrawFill className="w-[25px] h-[25px] mr-4" />
                    Withdraw Funds
                  </button>
                </Link>
              </section>

              <section className="w-full flex justify-center items-center flex-col py-4">
                <h2 className="w-full text-[16px] py-5 font-poppins font-semibold">Transactions History</h2>

                <TransactionTable />
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Transactions