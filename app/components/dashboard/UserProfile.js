import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import Button from '../shared/Button'

const UserProfile = () => {
    const user = useSelector(selectUser)

    return (
        <div>
            <h1 className="text-3xl text-bold">User Profile</h1>
            <div className="flex items-center gap-4 mt-5">
                <img src={user?.image} loading="lazy" alt={user?.name} />
                <div>
                    <h2 className="text-3xl text-bold">{user?.name}</h2>
                    <h3 className="text-lg text-semibold text-primary mt-1">{user?.email}</h3>
                </div>
            </div>
            <Link href="/my-account/orders">
                <Button
                    title="View orders"
                    className="py-4 mt-5 text-white mr-5"
                />
            </Link>
            <Link href="/my-account/addresses">
                <Button
                    title="Update billing information"
                    className="py-4 mt-5 text-white"
                />
            </Link>
        </div>
    )
}

export default UserProfile