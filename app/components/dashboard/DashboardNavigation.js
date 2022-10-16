import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import DASHBOARD_NAV from '../../configs/dashboard_nav'
import { auth } from '../../utils/firebase'

const DashboardNavigation = () => {
    const router = useRouter()

    return (
        <>
            <div className="bg-gray-100 p-3 rounded-md space-y-3 flex flex-col">
                {DASHBOARD_NAV.map((nav_item, index) => {
                    return (
                        <Link href={`${nav_item.href}`} key={index}>
                            <a
                                className={`flex items-center gap-4 ${router.pathname == nav_item.href && "bg-gray-200"
                                    } rounded-md cursor-pointer p-2`}
                                key={nav_item.href}
                                href={`${nav_item.href}`}
                            >
                                <div className="flex items-center justify-center text-base text-white bg-primary bg-opacity-80 p-2 rounded-md">
                                    {nav_item.icon}
                                </div>
                                <h4 className="font-semibold">{nav_item.title}</h4>
                            </a>
                        </Link>
                    );
                })}
            </div>
            <button onClick={() => auth.signOut()} className="py-4 ">💔 Logout</button>
        </>
    )
}

export default DashboardNavigation