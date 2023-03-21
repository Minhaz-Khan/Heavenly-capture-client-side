import React, { useContext, useEffect, useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import ScrollToBottom from 'react-scroll-to-bottom';
import { io } from 'socket.io-client';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Message from './Message';
const ENDPOINT = 'http://localhost:5000/';
let socket;

const Chat = () => {
    const { user } = useContext(AuthContext)
    const [id, setId] = useState();
    const [message, setMessage] = useState([])
    console.log(message);
    const handleMessage = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        socket.emit('message', { message, id });
        e.target.reset()


    }


    useEffect(() => {
        socket = io(ENDPOINT, { transports: ['websocket'] })
        socket.on('connect', () => {
            setId(socket.id)
        })
        socket.emit('newUser', user?.displayName)
        socket.on('welcome', (data) => {
            setMessage([...message, data])
            console.log(data.user, data.message);
        })
        socket.on('userJoined', (data) => {
            setMessage([...message, data])
            console.log(data.user, data.message);
        })
        socket.on('leave', (data) => {
            setMessage([...message, data])
            console.log(data.user, data.message);
        })
        return () => {
            // socket.emit('disconnect')
            // socket.off();
        }
    }, [user?.displayName])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessage([...message, data])
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off()
        }
    }, [message])


    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center'>
            <div className='w-6/12 border-2 border-lightSecondary'>
                <dir className='w-full p-0 h-12 m-0  bg-themePrimary'></dir>
                <ScrollToBottom className='h-72 p-0 m-0 space-y-5 overflow-y-scroll'>
                    {message.map((item, i) => <Message key={i} message={item.message} classs={item.id === id ? 'right' : 'left'} user={item.id === id ? '' : item.user} />)}
                </ScrollToBottom >
                <form onSubmit={handleMessage} className='h-12 p-0 flex m-0'>
                    <input name='message' className='w-full border-2 outline-none pl-2' type="text" placeholder='text Your Message' />
                    <button type='submit' className='p-2 bg-themePrimary text-white flex items-center'>Send<FaPaperPlane className='ml-2' /></button>
                </form>

            </div>
        </div>
    );
};

export default Chat;