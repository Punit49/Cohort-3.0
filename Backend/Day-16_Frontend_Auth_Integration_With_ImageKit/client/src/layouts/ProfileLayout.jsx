import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { MyStore } from '../context/ContextProvider'

const ProfileLayout = () => {
    const { accessToken } = useContext(MyStore);

    if(accessToken){
        return <Outlet />
    }

    return <Navigate to={'/auth/register'} />
}

export default ProfileLayout;
