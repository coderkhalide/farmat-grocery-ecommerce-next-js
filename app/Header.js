"use client";
import HeaderBottom from "@/components/HeaderBottom";
import {
  selectTotalCartItems,
  selectTotalPrice,
} from "@/redux/slices/basketSlice";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Search from "../components/Search";

const Header = () => {
  const cartItems = useSelector(selectTotalCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      <header className="bg-white py-7 border-b">
        <div className="container">
          {/* Header Top Area */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.svg"
                width="160"
                height="55"
                alt="logo"
                objectFit="contain"
              />
            </Link>
            {/* Search */}
            <Search />
            {/* Contact */}
            <div className="lg:flex flex-col hidden">
              <span className="text-2xl font-bold">8 800 332 65-66</span>
              <p className="self-end text-color">Support 24/7</p>
            </div>
            {/* Icons */}
            <div className="flex items-center gap-5">
              <Link href="/my-account">
                <div className="flex gap-1 items-center underline">
                  <AiOutlineUser className="text-3xl text-title" />
                  <p className="text-sm text-title mb-0">LOGIN / REGISTER</p>
                </div>
              </Link>
              <Link href="/cart" className="flex items-center gap-5">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-3xl text-title" />
                  <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-2 font-semibold">
                    {cartItems || 0}
                  </span>
                </div>
                <div className="hidden lg:block">
                  <span className="text-color text-sm">Your Cart</span>
                  <p className="text-title font-bold text-lg">${totalPrice}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <HeaderBottom />
    </>
  );
};

export default Header;
