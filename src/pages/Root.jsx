import { Outlet } from "react-router-dom"
import AppNavbar from "../layout/AppNavbar"
import {DonateCardComponent} from '../context/cardContext'
import { useState } from "react"

const Root = () => {

  const [donate,setDonate]=useState([])
  const [searchText,setSearchText]=useState('')
  const [submitStatus,setSubmitStatus]=useState(false)


  return (
    <div>
      <DonateCardComponent.Provider value={{donate,setDonate,searchText,setSearchText,submitStatus,setSubmitStatus}}>

        <AppNavbar />
        <Outlet></Outlet>
      </DonateCardComponent.Provider>

    </div>
  )
}

export default Root