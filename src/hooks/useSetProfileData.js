import { useEffect, useState } from "react"

export const useSetProfileData = () => {
    const [profileData, setProfileData] = useState(null)
    const localStorageData = localStorage.getItem(`profileData`)

    useEffect(() => {
        if (localStorageData) {
            setProfileData(JSON.parse(localStorageData))
        }
    }, [])



    return [profileData, setProfileData]

}