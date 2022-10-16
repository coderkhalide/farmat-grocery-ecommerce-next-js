import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, updateUser } from '../redux/slices/authSlice'
import { selectItems, updateBasket } from '../redux/slices/basketSlice'
import { auth } from '../utils/firebase'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems)


    useEffect(() => {
        // firebase user listeners
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(
                    updateUser({
                        email: user.email,
                        name: user.displayName,
                        image: user.photoURL,
                    })
                )
            } else {
                dispatch(
                    removeUser()
                )
            }
        })

        // get cart items from local storage
        const local_items = localStorage.getItem('@CART_ITEMS')
            ? JSON.parse(localStorage.getItem('@CART_ITEMS'))
            : []

        dispatch(updateBasket(local_items))

        return unsubscribe
    }, [])

    useEffect(() => {
        if(!cartItems.length) return;
        // save cart items to local storage
        const items = JSON.stringify(cartItems)
        localStorage.setItem('@CART_ITEMS', items)
    }, [cartItems])

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout