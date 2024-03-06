import { TbCircleDashed } from 'react-icons/tb';
import { BiCommentDetail } from 'react-icons/bi';

export const HomePage = () => {
  return (
    <div className='relative'>
      <div className='w-full py-14 bg-[#00a884]'></div>
      <div className='flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-6 w-full'>
        <div className='left w-[30%] bg-[#e8e9ec] h-full'>
          <div className='w-full'>
            
            <div className='flex justify-between items-center p-3'>
              <div className='flex items-center space-x-3'>
                <img className='rounded-full w-10 h-10 cursor-pointer' src="https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg" alt="" />
                <p>username</p>
              </div>
              <div className='space-x-3 text-2x1 flex'>
                <TbCircleDashed />
                <BiCommentDetail />
              </div>
            </div>

            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className='right'>

        </div>
      </div>
    </div>
  )
}