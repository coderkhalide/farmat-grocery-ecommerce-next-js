
import { BiUser } from "react-icons/bi";

export const menus = [
    {
        pathname: "/",
        Icon: BiUser,
        title: "Dashboard",
        secure: false
    },
    {
        pathname: "/admin/statistics",
        Icon: BiUser,
        title: "Statistics",
        secure: true
    },
    {
        pathname: "/admin/menus",
        Icon: BiUser,
        title: "Menus",
        secure: true
    },
    {
        pathname: "/admin/categories",
        Icon: BiUser,
        title: "Categories",
        secure: true
    },
    {
        pathname: "/admin/users",
        Icon: BiUser,
        title: "Users",
        secure: true
    },
]