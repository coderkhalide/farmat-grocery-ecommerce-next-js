import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, updateUser } from '../redux/slices/authSlice'
import { auth } from '../utils/firebase'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    const dispatch = useDispatch()

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
            } else{
                dispatch(
                    removeUser()
                )
            }
        })

        return unsubscribe
    }, [])

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