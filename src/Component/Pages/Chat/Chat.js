import React from 'react';
import { FaPaperPlane } from "react-icons/fa";
const Chat = () => {
    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center'>
            <div className='w-6/12 border-2 border-lightSecondary'>
                <dir className='w-full p-0 h-12 m-0  bg-themePrimary'></dir>
                <dir className='h-72 p-0 m-0'></dir>
                <dir className='h-12 p-0 flex m-0'>
                    <input className='w-full border-2 outline-none pl-2' type="text" placeholder='text Your Message' />
                    <button className='p-2 bg-themePrimary text-white flex items-center'>Send<FaPaperPlane className='ml-2' /></button>
                </dir>
            </div>
        </div>
    );
};

export default Chat;