import { Outlet } from "react-router-dom"
import AppNavbar from "../layout/AppNavbar"

const Root = () => {
  return (
    <div>
        <AppNavbar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Root