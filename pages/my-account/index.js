import React from 'react'
import Auth from '../../app/components/auth'
import Breadcrumb from '../../app/components/shared/Breadcrumb'

const MyAccount = () => {
  return (
    <main>
      <div className="bg-[#F5F5F5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <Auth />
    </main>
  )
}

export default MyAccount