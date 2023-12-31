import { useContext, useEffect, useState } from "react"
import { DonateCardComponent } from "../context/cardContext";
import DonateCards from "../components/donateCards/DonateCards";

export const Donation = () => {
  const { donate } = useContext(DonateCardComponent)
  const [count, setCount] = useState(4)
  const [seeButton, setSeeButton] = useState(false)

  const handleClickSee = () => {
    setCount(donate.length)
    setSeeButton(false)
  }

  useEffect(() => {
    if (donate.length > 4) {
      setSeeButton(true)
    }
  }, [donate])


  return (
    <div className="max-w-[1300px] mx-auto">
      <div className=" grid grid-cols-1 p-2 lg:p-0 md:grid-cols-2 my-10 gap-5">
        <DonateCards len={count} donate={donate} />
      </div>
      {donate.length == 0 && <div className="text-center bg-red-300 text-xl p-3 rounded-xl">
        <h1 className="text-red-600">You have not donated anything yet</h1>
      </div>}

      <div className="w-full flex justify-center">
        {seeButton && <button className="btn text-white bg-green-600 px-5" onClick={handleClickSee}>See All</button>}
      </div>
    </div>
  )
}
