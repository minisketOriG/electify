

import CategoryCard from "@/components/VoterEventComponent/CategoryCard"
import PageFooter from "@/components/VoterPageComponents/PageFooter"
import PageHeader from "@/components/VoterPageComponents/PageHeader"
import { HiCurrencyDollar } from "react-icons/hi"


const EventCheckout = () => {

    return (
        <>
            <div className="bg-gray-200 flex flex-col w-full h-full">
                <PageHeader />


                <main className="w-full flex justify-center flex-col p-10">
                    <div className="w-full font-poppins ">
                        <h1 className="bg-black flex items-center text-white font-medium text-[16px] p-4">
                            Gambisa Awards
                        </h1>

                        <hr className="my-4" />

                        <h2 className="flex justify-start items-center font-bold text-[20px]">
                            <HiCurrencyDollar className="w-[30px] h-[30px] mr-2"/>
                            Cost-based Voting
                        </h2>
                    </div>

                    <div className="w-full flex justify-center items-center flex-col mt-5">
                        <p className="font-poppins font-bold text-[20px]">Voting Categories</p>

                        <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col mt-5">
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                        </section>
                    </div>
                </main>

                <PageFooter />

            </div>
        </>
    )
}

export default EventCheckout