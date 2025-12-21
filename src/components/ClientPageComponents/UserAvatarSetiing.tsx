

import { useRef, useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import { MdModeEdit } from 'react-icons/md'
import images from '../../utils/AssetsUtils'

const UserAvatarSetiing = () => {

  const [isLoadingPic, setIsLoadingPic] = useState(false)
  const avatarPickerRef = useRef<HTMLInputElement | null>(null)
  const avatarHolderRef = useRef<HTMLImageElement | null>(null)

  const handleAvaterPicker = () => {
    avatarPickerRef.current?.click()
  }

  const handleAvaterChange = () => {
    const file = avatarPickerRef.current?.files?.[0];
    setIsLoadingPic(true)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgElement = avatarHolderRef.current;
        if (imgElement) {
          imgElement.src = reader.result as string;
          setIsLoadingPic(false)
        }
      };
      reader.readAsDataURL(file);
    }
  }


  return (
    <>
      <div className="w-full flex justify-center items-center flex-col py-5 mt-10">
        <section className="flex justify-center items-center flex-col">
          <div className="relative w-fit rounded-full outline-4 outline-offset-8 outline-black/50 overflow-hidden">
            <img className="w-[180px] h-[180px] rounded-full border-4 border-black "
              src={images.avatarDemo} alt="avatarUser" ref={avatarHolderRef} />

            {isLoadingPic &&
              <div className="bg-black/50 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                <FaSpinner className="w-[30px] h-[30px] text-[#0C35BC] animate-spin" />
              </div>
            }
          </div>

          <input ref={avatarPickerRef} onChange={handleAvaterChange} type="file" name="avatarPicker" hidden />
        </section>

        <button onClick={handleAvaterPicker} className="flex justify-center items-center bg-[#0C35BC] w-[300px] cursor-pointer text-[16px] text-white border-2 border-[#0C35BC] font-poppins font-semibold px-2 py-2 mt-10 rounded-[10px]
                            hover:bg-white hover:text-[#0C35BC] hover:font-bold transition-all duration-200" type="button">
          <MdModeEdit className="w-[20px] h-[20px] mr-2" />
          Change Profile Picture
        </button>
      </div>
    </>
  )
}

export default UserAvatarSetiing