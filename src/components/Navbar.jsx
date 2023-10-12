import { HiOutlineMenuAlt1, HiOutlineSearch } from "react-icons/hi";
import { BsCart2, BsSave } from "react-icons/bs";
import { IoClose, IoHelpSharp } from 'react-icons/io5'
import { TbTruckDelivery } from "react-icons/tb"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { PiWallet } from "react-icons/pi"
import { AiOutlineTag } from "react-icons/ai"
import { LiaUserFriendsSolid } from "react-icons/lia"
// import { IoIosHelp } from "react-icons/io"
import { useState } from "react";

const Navbar = () => {

    const [links, setLinks] = useState([
        {
            icon: <TbTruckDelivery size={20} />,
            text: 'Orders'
        },
        {
            icon: <MdOutlineFavoriteBorder size={20} />,
            text: 'Favorites'
        },
        {
            icon: <PiWallet size={20} />,
            text: 'Wallet'
        },
        {
            icon: <IoHelpSharp size={20} />,
            text: 'Help'
        },
        {
            icon: <AiOutlineTag size={20} />,
            text: 'Promotions'
        },
        {
            icon: <BsSave size={20} />,
            text: 'Best Ones'
        },
        {
            icon: <LiaUserFriendsSolid size={22} />,
            text: 'Invite Friends'
        },
    ])

    const [nav, setNav] = useState(false)

    const handleSidebar = () => {
        setNav(!nav)
    }

    const handleClose = () => {
        setNav(false)
    }

  return (
    <div className="shadow-sm sticky top-0 z-50 bg-white">
        <div className="container">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-[6px]">
                    <div className="cursor-pointer" onClick={handleSidebar}>
                        <HiOutlineMenuAlt1 size={24} />
                    </div>
                    <h1 className="text-[19px] lg:text-[22px] xl:text-[24px] px-2">Best <span className="font-bold">Eats</span></h1>
                    <div className="hidden lg:flex bg-gray-200 text-[14px] p-1 rounded-full font-medium">
                        <p className="p-2 bg-black text-white rounded-full cursor-pointer">Delivery</p>
                        <p className="p-2 cursor-pointer">Pickup</p>
                    </div>
                </div>

                <div className="bg-gray-200 px-2 flex items-center w-[200px] md:w-[300px] lg:w-[500px] rounded-full">
                    <HiOutlineSearch size={25} className="cursor-pointer"/>
                    <input type="text" className="bg-transparent p-2 w-full focus:outline-none rounded-full" placeholder="Search Food" />
                </div>

                <button className="hidden md:flex items-center gap-1 bg-black text-white py-2 px-3 rounded-full">
                    <BsCart2 size={20} />
                    <p>Cart</p>
                </button>
            </div>
            
            {/* overlay */}
            <div className={ `bg-black/80 fixed top-0 ${nav? 'left-0' : 'left-[-100%]'} w-full h-screen z-10` }>
            </div>

            {/* Sidebar */}
            <div className={ `bg-white fixed top-0 ${nav? 'left-0' : 'left-[-100%]'} w-[270px] h-full z-10 px-[20px] duration-300 ` }>
                <IoClose size={25} className="absolute top-4 right-4 cursor-pointer" onClick={handleClose} />
                <h2 className="p-4 text-[21px]">Best <span className="font-medium">Eats</span></h2>

                <nav>
                    <ul className="flex flex-col gap-3  mt-[15px] text-gray-800">
                    {
                        links.map( link => (
                            <li key={link.text} className="text-xl py-2 px-4 cursor-pointer flex items-center gap-4 rounded-xl hover:bg-[#f1f5f9] duration-300">{link.icon}{link.text}</li>
                        ))
                    }
                    </ul>
                </nav>
            </div>

        </div>
    </div>
  )
}

export default Navbar


