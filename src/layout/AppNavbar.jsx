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

        <div className=" bgx" style={{ backgroundImage: `url('https://i.ibb.co/hssyLX9/Clothing-half-trans.png')` }}>



            <div className="max-w-[1300px] mx-auto">
                <div className=" py-6 flex md:flex-row justify-between items-center">
                    <img className=" cursor-pointer" onClick={handleClick} src='https://i.ibb.co/vhwYd6P/Logo.png' alt="" />
                    
                    
                    {!status ? <HiBars3BottomRight onClick={()=>{setStatus(!status)}} className="block md:hidden text-3xl"/>:<HiXMark onClick={()=>{setStatus(!status)}} className="block md:hidden text-3xl"/> }
                    {status && 

                    <nav className="p-3 rounded-xl px-6 absolute flex bg-gray-300 right-4 top-20 flex-col md:flex-row md:space-x-8 text-lg font-semibold">
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




                
                <div className=" w-full flex ">
                    {/* <div className="mt-24 mx-auto">
                    <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className=" py-10 flex justify-center ">
                    <div className="border-gray-300 border rounded-2xl overflow-hidden bg-red-600"><input className="text-xl p-3 outline-none" type="text" placeholder="Search here" />
                     <button className=" ml-0 px-4 text-xl text-white">Search</button></div>
                    </div>
                </div> */}
                </div>



            </div>
        </div>


    )
}

export default AppNavbar