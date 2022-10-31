import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'

const Dashboard = () => {
  const user = useSelector(selectUser)
  return (
    <div >
      <h1 className="text-center text-2xl font-bold mb-4">Hi {user?.name}👋,<br />Welcome to your Dashboard</h1>
      <div className="flex flex-col items-center gap-4 mt-5">
        <img src={user?.image} loading="lazy" alt={user?.name} />
        <div>
          <h2 className="text-3xl text-bold">{user?.name}</h2>
          <h3 className="text-lg text-semibold text-primary mt-1">{user?.email}</h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard