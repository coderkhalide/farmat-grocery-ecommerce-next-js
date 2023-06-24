import { BiUser } from "react-icons/bi";
import { FiSliders } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbAddressBook } from "react-icons/tb";

export const DASHBOARD_NAV = [
    {
        title: "Dashboard",
        href: '/my-account',
        icon: <FiSliders />,
    },
    {
        title: "Orders",
        href: '/my-account/orders',
        icon: <BsCart />,
    },
    {
        title: "User Profile",
        href: '/my-account/edit-account',
        icon: <BiUser />,
    },
    {
        title: "Addresses",
        href: '/my-account/addresses',
        icon: <TbAddressBook />,
    },
    // {
    //     title: "Reviews",
    //     href: '/my-account/reviews',
    //     icon: <MdOutlineReviews />,
    // },
];
export default DASHBOARD_NAV