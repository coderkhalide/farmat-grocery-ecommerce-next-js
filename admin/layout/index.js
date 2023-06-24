import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import styles from './styles/Body.module.css'

const AdminLayout = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState(true)

    return (
        <div className={styles.body + " " + styles.light}>
            <Navbar setSidebarActive={setSidebarActive} />
            <div className={styles.content_wrapper}>
                {sidebarActive && <Sidebar setSidebarActive={setSidebarActive} />}
                <div className={styles.body_content}>
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default AdminLayout