import React from 'react'
import DashboardWrapper from '../components/dashboard/DashboardWrapper'
import Auth from '../components/auth'
import Breadcrumb from '../components/shared/Breadcrumb'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice'

const DashboardLayout = ({ children }) => {
    const user = useSelector(selectUser)
    
    return (
        <main>
            <div className="bg-[#F5F5F5] p-5">
                <div className="mx-auto max-w-5xl">
                    <Breadcrumb />
                </div>
            </div>
            {user ? (
                <DashboardWrapper>
                    {children}
                </DashboardWrapper>
            ) : (
                <Auth />
            )}

        </main>
    )
}

export default DashboardLayout