import { useContext } from "react"
import { DonateCardComponent } from "../context/cardContext";
import DonateCards from "../components/donateCards/DonateCards";

export const Donation = () => {
  const {donate,setDonate}=useContext(DonateCardComponent)
  console.log(donate);
  return (
    <div className="max-w-[1300px] mx-auto grid grid-cols-2 my-10 gap-5">
      <DonateCards donate={donate}/>
    </div>
  )
}
