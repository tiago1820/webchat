import { TbCircleDashed } from 'react-icons/tb';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ChatCard } from '../ChatCard/ChatCard';
import { useState } from 'react';
import { MessageCard } from '../MessageCard/MessageCard';
import { ImAttachment } from 'react-icons/im';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../Profile/Profile';

export const HomePage = () => {
    const [querys, setQuerys] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [content, setContent] = useState("");
    const [isProfile, setIsProfile] = useState(false);
    const navigate = useNavigate();

    const handleClickOnChatCard = () => {
        setCurrentChat(true)
    }

    const handleSearch = () => {

    }

    const handleCreateNewMessage = () => {


    }

    const handleNavigate = () => {
        setIsProfile(true)
    }

    const handleCloseOpenProfile = () => {
        setIsProfile(false);
    }

    return (
        <div className='relative'>
            <div className='w-full py-14 bg-[#00a884]'></div>
            <div className='flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
                <div className='left w-[30%] bg-[#e8e9ec] h-full'>
                    {/* profile */}
                    {isProfile && <div className='w-full h-full'> <Profile handleCloseOpenProfile={handleCloseOpenProfile} /></div>}

                    {!isProfile && <div className='w-full'>

                        {/* home */}
                        {<div className='flex justify-between items-center p-3'>
                            <div onClick={handleNavigate} className='flex items-center space-x-3'>
                                <img
                                    className='rounded-full w-10 h-10 cursor-pointer'
                                    src="https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"
                                    alt=""
                                />
                                <p>username</p>
                            </div>
                            <div className='space-x-3 text-2xl flex'>
                                <TbCircleDashed className='cursor-pointer' onClick={()=>navigate('/status')} />
                                <BiCommentDetail />
                            </div>
                        </div>}

                        <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                            <input
                                className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2'
                                type="text"
                                placeholder='Busca o inicia uno nuevo'
                                onChange={(e) => {
                                    setQuerys(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                            />
                            <AiOutlineSearch className='left-5 top-7 absolute' />
                            <div>
                                <BsFilter className='ml-4 text-3xl' />
                            </div>
                        </div>
                        {/* all user */}
                        <div className='bg-white overflow-y-scroll h-[72vh] px-3'>
                            {querys &&
                                [1, 1, 1, 1, 1].map((item) => (
                                    <div onClick={handleClickOnChatCard}>
                                        {" "}
                                        <hr /> <ChatCard /> {" "}
                                    </div>
                                ))}
                        </div>
                    </div>}
                </div>



                {/* default whats up page  */}
                {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                    <div className='max-w-[70%] text-center'>
                        <img src="https://res.cloudinary.com/zarmariya/image/upload/v1662264838/whatsapp_multi_device_support_update_image_1636207150180-removebg-preview_jgyy3t.png" alt="" />
                        <h1 className='text-4x1 text-gray-600'>WhatsApp Web</h1>
                        <p className='my-9'>Envíe y reciba mensajes sin mantener su teléfono en línea. Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono en la misma línea.</p>
                    </div>
                </div>}
                {/* message part */}
                {currentChat && (
                    <div className='w-[70%] relative bg-blue-200'>
                        <div className='header absolute top 0 w full bg-[#f0f2f5'>
                            <div className='flex justify-between'>
                                <div className='py-3 space-x-4 flex items-center px-3'>
                                    <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg" alt="" />
                                    <p>
                                        username
                                    </p>
                                </div>
                                <div className='py-3 flex space-x-4 items-center px-3'>
                                    <AiOutlineSearch />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                        {/* message section */}
                        <div className='px-10 h-[85vh] overflow-y-scroll'>
                            <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                                {[1, 1, 1, 1, 1,].map((item, i) => <MessageCard isReqUserMessage={i % 2 === 0} content={"message"} />)}
                            </div>
                        </div>
                        {/* footer part */}
                        <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
                            <div className='flex justify-between items-center px-5 relative'>
                                <BsEmojiSmile className='cursor-pointer' />
                                <ImAttachment />

                                <input
                                    className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
                                    type="text"
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder='Type message'
                                    value={content}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            handleCreateNewMessage();
                                            setContent("");
                                        }
                                    }}
                                />
                                <BsMicFill />

                            </div>



                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}












