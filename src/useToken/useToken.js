import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        email && fetch(`https://heavenlycapture.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    console.log(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])

    return token;
}



export default useToken;