

import images from '@/utils/AssetsUtils'


const PageHeader = () => {
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
                            <span className="font-poppins font-bold text-[14px] text-white">CREATED BY LINDA ADUBEA</span>
                            <img className="w-[30px] h-[30px]" src={images.avatarDemo} alt="profilePic" />
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default PageHeader