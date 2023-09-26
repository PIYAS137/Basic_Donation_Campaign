import { Outlet } from "react-router-dom"
import AppNavbar from "../layout/AppNavbar"
import {DonateCardComponent} from '../context/cardContext'
import { useState } from "react"

const Root = () => {

  const [donate,setDonate]=useState([])



  return (
    <div>
      <DonateCardComponent.Provider value={{donate,setDonate}}>

        <AppNavbar />
        <Outlet></Outlet>
      </DonateCardComponent.Provider>

    </div>
  )
}

export default Root