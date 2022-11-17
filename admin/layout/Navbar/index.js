import styles from './Navbar.module.css'
// import NavUser from '../../components/NavUser';
import Image from 'next/image'
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";

function Navbar({ setSidebarActive }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.navLeft}>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.svg"
                            width="160"
                            height="55"
                            objectFit="contain"
                        />
                        <div className="p-2 text-white bg-indigo-200 rounded-lg" onClick={() => setSidebarActive(old => !old)}>
                            <BiUser className={styles.icon} />
                        </div>
                    </div>
                </div>
                <div className={styles.navRight}>
                    {/* <NavUser /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
