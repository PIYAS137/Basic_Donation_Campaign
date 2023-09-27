import { NavLink, useNavigate } from "react-router-dom"
import { HiBars3BottomRight,HiXMark } from "react-icons/hi2";
import '../App'
import { useState } from "react";

const AppNavbar = () => {
    const [status,setStatus]=useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return (

        <div className=" bgx">
            <div className="max-w-[1300px] mx-auto">
                <div className="px-2 md:px-0 py-6 flex md:flex-row justify-between items-center">
                    <img className="cursor-pointer" onClick={handleClick} src='https://i.ibb.co/vhwYd6P/Logo.png' alt="" />
                      
                    {!status ? <HiBars3BottomRight onClick={()=>{setStatus(!status)}} className=" cursor-pointer block md:hidden text-3xl"/>:<HiXMark onClick={()=>{setStatus(!status)}} className="block cursor-pointer md:hidden text-3xl"/> }
                    {status && 

                    <nav className="p-3 z-50 rounded-xl px-6 absolute flex md:hidden bg-gray-300 right-4 top-20 flex-col md:flex-row md:space-x-8 text-lg font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/donation'>Donation</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                    </nav>

                    }
                    <nav className="hidden md:block flex flex-col md:flex-row md:space-x-8 text-lg font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/donation'>Donation</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                    </nav>
                </div>
            </div>
        </div>


    )
}

export default AppNavbar