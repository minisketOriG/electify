
import { useState } from 'react';

//icons
import { IoMdAddCircle } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa6';

//components
import NavigationPanel from '@/components/ClientPageComponents/NavigationPanel';
import PageHeader from '@/components/ClientPageComponents/PageHeader';
import EventCard from '@/components/ClientEventComponents/EventCard';
import CreateEvent from '@/components/ClientEventComponents/Modals/EventModals/CreateEvent';
import EventSettings from '@/components/ClientEventComponents/Modals/EventModals/EventSettings';
import EventShareCard from '@/components/ClientEventComponents/Modals/EventModals/EventShare';

//stateHandlers
import { useDispatch, useSelector } from 'react-redux';
import { setShowCreate } from '@/store/DataSlides/EventPageStatesSlide';


const VotingEvent = () => {

  const dispatch = useDispatch()
  const pageStates = useSelector((state: any) => state.eventpage.eventPageStates)

  const [isCreateShowLoading, setIsCreateShowLoading] = useState<boolean>(false)

  const showCreateEvent = () => {
    setIsCreateShowLoading(true)

    setTimeout(() => {
      setIsCreateShowLoading(false)
      dispatch(setShowCreate(true))
    }, 1000)
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <PageHeader type="clientPage" />

        <main className="bg-gray-200 flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="votingevents" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Voting Events</h1>
              <hr className="my-2" />

              <div className="w-full flex justify-center items-center mt-10">
                <button onClick={showCreateEvent} className="w-[450px] h-[60px] bg-[#0C35BC] flex justify-center items-center text-white text-xl px-5 py-3 rounded-[10px] border-2 border-[#0C35BC] 
                   text-[16px] font-poppins font-semibold cursor-pointer hover:bg-white hover:text-[14px] hover:text-[#0C35BC] transition-all duration-200">
                  {isCreateShowLoading ?
                    <FaSpinner className="w-[20px] h-[20px] mr-4 animate-spin" /> :
                    <IoMdAddCircle className="w-[30px] h-[30px] mr-2" />
                  }
                  Create new event
                </button>
              </div>

              <div className="w-full py-5">
                <h2 className="text-[16px] py-3 font-poppins font-semibold">Opened Events</h2>

                <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col">
                  <EventCard eventType="cost" eventTiming={true} />
                  <EventCard eventType="nocost" eventTiming={true} />
                  <EventCard eventType="cost" eventTiming={false} />
                </section>

                <h2 className="text-[16px] py-3 font-poppins font-semibold">Closed Events</h2>

                <section className="w-full flex justify-center items-center py-5 space-y-5 flex-col">
                  <EventCard eventType="nocost" eventTiming={true} />
                  <EventCard eventType="cost" eventTiming={false} />
                  <EventCard eventType="nocost" eventTiming={true} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/*Modals*/}
      {pageStates.showCreate && <CreateEvent />}
      {pageStates.showSettings && <EventSettings />}
      {pageStates.showShare && <EventShareCard />}
    </>
  )
}

export default VotingEvent