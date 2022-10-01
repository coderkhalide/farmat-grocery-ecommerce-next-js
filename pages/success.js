import React from 'react'
import SuccessContent from "../app/components/order/SuccessContent"

const Success = () => {
  return (
    <main>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">Success</h1>
          <SuccessContent />
        </div>
      </div>
    </main>
  )
}

export default Success