import React from 'react'
import { AppTextArea, FormDropdown, FormInput } from '../shared/Form'

const COUNTRIES = [
    { title: "United States" }, { title: "United Kingdom" }, { title: "Canada" }, { title: "Australia" }, { title: "Bangladesh" }, { title: "France" }, { title: "Italy" }, { title: "Spain" }, { title: "Netherlands" }, { title: "Belgium" }, { title: "Austria" }, { title: "Switzerland" }, { title: "Sweden" }, { title: "Norway" }, { title: "Denmark" }, { title: "Finland" }, { title: "Ireland" }, { title: "New Zealand" }, { title: "Japan" }, { title: "China" }, { title: "Hong Kong" }, { title: "Singapore" }, { title: "India" }, { title: "Brazil" }, { title: "Mexico" }, { title: "Argentina" }, { title: "Chile" }, { title: "Colombia" }, { title: "Peru" }, { title: "Venezuela" }, { title: "South Africa" }, { title: "Egypt" }, { title: "Western" }
]

const BillingDetailsForm = () => {

    return (
        <div>
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
            <AppTextArea
                name="notes"
                placeholder="Order notes (optional)"
                type="textarea"
            />
        </div>
    )
}

export default BillingDetailsForm