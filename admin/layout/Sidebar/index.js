import styles from './Sidebar.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";
import { menus } from '../../configs/menus'
import { BiUser } from "react-icons/bi";

function Sidebar({ setSidebarActive }) {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <div className={"items-center justify-between gap-2 mb-8 " + styles.logo}>
                    <Image
                        src="/logo.svg"
                        width="160"
                        height="55"
                        objectFit="contain"
                    />
                    <div className={styles.sidebarToggle} onClick={() => setSidebarActive(old => !old)}>
                        <BiUser className={styles.icon} />
                    </div>
                </div>
                <div className={styles.sidebar__items}>
                    {/* <h5>Title</h5> */}
                    {menus && menus?.map(({ pathname, Icon, title }) => (
                        <div key={pathname} className={styles.sidebar__item + " " + (router.pathname == pathname ? styles.sidebar__item_active : '')} onClick={() => router.push(pathname)}>
                            <div className={styles.sidebar__item_icon_wrapper}>
                                <Icon className={styles.icon} />
                            </div>
                            <span>{title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={() => setSidebarActive(old => !old)} className={styles.backdrop} />
        </>
    )
}

export default Sidebar