

import { BsPersonFillAdd } from 'react-icons/bs'
import { IoLogInSharp, IoLogOut } from 'react-icons/io5'
import HeaderButton from '../ButtonComponents/HeaderButton'
import { PageHeaderProps } from '../../interfaces/interfaces'
import images from '../../utils/AssetsUtils'


const PageHeader = (props: PageHeaderProps) => {


  return (
    <>
      <header className="bg-black sticky top-0 z-30 w-full h-auto py-4 flex items-center justify-between">
        <div className="flex items-center mx-5 space-x-5">
          <img className="w-[40px] h-[40px]" src={images.electifyLogo} alt="electifyLogo" />
          <h1 className="font-bagel text-2xl text-white">Electify</h1>
        </div>
        <div className="flex items-center mx-5 space-x-5">
          <nav>
            <ul className="flex items-center space-x-4">
              <HeaderButtons type={props.type} />
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}


const HeaderButtons = (props: { type: string }) => {
  if (props.type == "landingPage") {
    return (
      <>
        <HeaderButton text="Sign in" icon={<IoLogInSharp className="w-[20px] h-[20px]" />} link="/auth/signin" />
        <HeaderButton text="Sign up" icon={<BsPersonFillAdd className="w-[20px] h-[20px]" />} link="/auth/signup" />
      </>
    )
  } else if (props.type == "clientPage") {
    return (
      <>
        <span className="font-poppins font-bold text-[14px] text-white">WELCOME, LINDA ADUBEA</span>
        <img className="w-[30px] h-[30px]" src={images.avatarDemo} alt="profilePic" />
        <span className='font-poppins font-bold text-[16px] text-white'>$ 0.00</span>
        <HeaderButton text="Log out" icon={<IoLogOut className="w-[20px] h-[20px]" />} action={true} />
      </>
    )
  }
}

export default PageHeader