import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import * as Yup from "yup";
import { selectUser } from '../../redux/slices/authSlice';
import { db } from '../../utils/firebase'
import { AppForm, AppTextArea, FormBtn, FormDropdown, FormInput } from '../shared/Form';
import { showNotification } from '@mantine/notifications';

const COUNTRIES = [
    { title: "United States" }, { title: "United Kingdom" }, { title: "Canada" }, { title: "Australia" }, { title: "Bangladesh" }, { title: "France" }, { title: "Italy" }, { title: "Spain" }, { title: "Netherlands" }, { title: "Belgium" }, { title: "Austria" }, { title: "Switzerland" }, { title: "Sweden" }, { title: "Norway" }, { title: "Denmark" }, { title: "Finland" }, { title: "Ireland" }, { title: "New Zealand" }, { title: "Japan" }, { title: "China" }, { title: "Hong Kong" }, { title: "Singapore" }, { title: "India" }, { title: "Brazil" }, { title: "Mexico" }, { title: "Argentina" }, { title: "Chile" }, { title: "Colombia" }, { title: "Peru" }, { title: "Venezuela" }, { title: "South Africa" }, { title: "Egypt" }, { title: "Western" }
]

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
});

const AddressForm = () => {
    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(false)

    const updateAddress = async (values) => {
        setLoading(true)
        await db.collection('users').doc(user.uid).set({
            billing_details: { ...values }
        }, { merge: true })
            .then(() => {
                showNotification({ title: "Updated successfully", message: 'Address information 0Updated successfully' })
            })
            .catch((error) => {
                showNotification({ title: "Failed", message: 'Something went wrong', color: 'red', })
                console.log(error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <h1 className="text-center text-3xl mb-5 font-bold">Update Billing Address</h1>
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
                }}
                onSubmit={updateAddress}
                validationSchema={validationSchema}
            >
                <FormInput
                    name="first_name"
                    placeholder="First name"
                />
                <FormInput
                    name="last_name"
                    placeholder="Last name"
                />
                <FormInput
                    name="company"
                    placeholder="Company name (optional)"
                />
                <FormDropdown
                    name="country"
                    placeholder="Country / Region"
                    items={COUNTRIES}
                />
                <FormInput
                    name="address"
                    placeholder="Street address"
                />
                <FormInput
                    name="city"
                    placeholder="Town / City"
                />
                <FormInput
                    name="state"
                    placeholder="State / Province"
                />
                <FormInput
                    name="zip"
                    placeholder="ZIP / Postal code"
                />
                <FormInput
                    name="phone"
                    placeholder="Phone"
                />
                <FormInput
                    name="email"
                    placeholder="Email address"
                    type="email"
                />
                <FormBtn
                    title="Update"
                    loading={loading}
                />
            </AppForm>
        </div>
    )
}

export default AddressForm