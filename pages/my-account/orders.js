import React from 'react'
import DashboardLayout from '../../app/layout/DashboardLayout'
import DashboardOrders from '../../app/components/order'

const Orders = () => {
  return (
    <DashboardLayout>
      <DashboardOrders />
    </DashboardLayout>
  )
}

export default Orders