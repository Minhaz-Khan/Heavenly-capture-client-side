import { useEffect, useState } from 'react';

const useUserType = (email) => {
    const [userType, setUserType] = useState();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        email && fetch(`https://heavenlycapture.vercel.app/userType?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setUserType(data.userType)
                setIsLoading(false)
            })


    }, [email])
    return { userType, isLoading };
};

export default useUserType;