import React, { useState } from 'react'
import BillingInfo from './BillingInfo'
import YourOrder from './YourOrder'
import * as Yup from "yup";
import { AppForm } from '../shared/Form';
import { db, timestamp } from '../../utils/firebase'
import { selectUser } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, selectTotalPrice, updateBasket } from '../../redux/slices/basketSlice';
import { uuid } from '../../utils/helpers';
import { useRouter } from 'next/router';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(25).required().label("First name"),
    last_name: Yup.string().max(25).required().label("Last name"),
    company: Yup.string().label("Company name"),
    country: Yup.string().required().label("Country / Region"),
    address: Yup.string().required().label("Address"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required().label("State / Province"),
    zip: Yup.string().required().label("ZIP / Postal code"),
    phone: Yup.string().required().label("Phone"),
    email: Yup.string().email().required().label("Email"),
    notes: Yup.string().max(500).label("Order notes"),
});

const CheckoutContent = () => {
    const user = useSelector(selectUser)
    const cartItems = useSelector(selectItems)
    const cartTotal = useSelector(selectTotalPrice)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const placeOrder = async (values) => {
        setLoading(true)
        await saveBillingDetails(values)

        const order_id = uuid()

        await placeOrderHandler(values, order_id)
        router.push('/success?order_id=' + order_id)
        dispatch(updateBasket([]))
        setLoading(false)
    }

    const saveBillingDetails = async (values) => {
        return db.collection('users').doc(user.uid).set({
            billing_details: values
        }, { merge: true })
    }

    const placeOrderHandler = async (values, order_id) => {
        const orderData = {
            order_id,
            ...user,
            payment_success: true,
            billing_details: values,
            items: cartItems,
            total: cartTotal,
            created_at: timestamp,
        }
        await db.collection('orders').doc(order_id).set(orderData)
    }

    return (
        <div className="flex flex-wrap md:flex-nowrap gap-5">
            <AppForm
                initialValues={{
                    first_name: user?.billing_details?.first_name || '',
                    last_name: user?.billing_details?.last_name || '',
                    company: user?.billing_details?.company || '',
                    country: user?.billing_details?.country || '',
                    address: user?.billing_details?.address || '',
                    city: user?.billing_details?.city || '',
                    state: user?.billing_details?.state || '',
                    zip: user?.billing_details?.zip || '',
                    phone: user?.billing_details?.phone || '',
                    email: user?.billing_details?.email || '',
                    notes: "",
                }}
                onSubmit={placeOrder}
                validationSchema={validationSchema}
            >

                <div className="w-full md:w-[60%]">
                    <BillingInfo />
                </div>
                <div className="w-full md:w-[40%]">
                    <YourOrder placeOrder={placeOrder} loading={loading} />
                </div>
            </AppForm>
        </div>
    )
}

export default CheckoutContent