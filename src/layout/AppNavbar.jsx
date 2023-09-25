import { NavLink } from "react-router-dom"
import '../App'

const AppNavbar = () => {
    return (

        <div className=" bgx" style={{ backgroundImage: `url('https://i.ibb.co/hssyLX9/Clothing-half-trans.png')` }}>
            <div className="max-w-[1300px] mx-auto">
                <div className=" py-6 flex justify-between items-center">
                    <img src='https://i.ibb.co/vhwYd6P/Logo.png' alt="" />
                    <nav className=" space-x-8 text-lg font-semibold">
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