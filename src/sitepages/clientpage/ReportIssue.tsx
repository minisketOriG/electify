
import PageHeader from '../../components/ClientPageComponents/PageHeader'
import NavigationPanel from '../../components/ClientPageComponents/NavigationPanel'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'

const ReportIssue = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmitReport = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }



  return (
    <>
      <div className="flex justify-center flex-col w-full h-screen">
        <PageHeader type="clientPage" />

        <main className="bg-gray-200 flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="report" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Report Issue</h1>
              <hr className="my-2" />

              <section className="flex justify-center items-center flex-col ">
                <div className="mt-5">
                  <p className="font-poppins font-semibold py-2">Subject</p>
                  <input className="w-[400px] font-poppins caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2" type="text" placeholder="Report Subject" />
                </div>

                <div className="mt-5">
                  <p className="font-poppins font-semibold py-2">Complaint</p>
                  <textarea className="w-[400px] h-[200px] font-poppins caret-[#0C35BC] rounded-[10px] border-4 border-[#0C35BC] p-2 resize-none" placeholder="Write your complaint here"></textarea>
                </div>

                <div>
                  <button onClick={handleSubmitReport} className="w-[350px] flex justify-center items-center bg-[#0C35BC] cursor-pointer text-[14px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-4 py-3 mt-10 rounded-[10px]
                                              hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200">
                    {isLoading && <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" />}
                    Submit Complaint
                  </button>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ReportIssue