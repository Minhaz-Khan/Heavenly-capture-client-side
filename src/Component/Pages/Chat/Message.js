import React from 'react';
import './Message.css'

const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}>
                {/* {`${user}:${message}`} */}
                <p><span className='font-medium'>{user}</span>: {message}</p>
            </div>
        )
    }
    else {
        return (
            <div className={`messageBox ${classs}`}>
                <p><span className='font-medium'>You</span>: {message}</p>
            </div>
        )
    }
};

export default Message;