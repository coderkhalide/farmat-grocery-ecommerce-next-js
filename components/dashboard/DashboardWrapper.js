import React from 'react'
import DashboardNavigation from './DashboardNavigation'

const DashboardWrapper = ({ children }) => {
    return (
        <div className="bg-white py-10 px-5">
            <div className="mx-auto max-w-5xl">
                <div className="flex md:flex-nowrap flex-wrap gap-5">
                    <div className="w-full md:w-1/4">
                        <DashboardNavigation />
                    </div>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper