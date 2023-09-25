import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { MyDatas } from "../database/Datas"
import { DonateCardComponent } from "../context/cardContext"

const ViewDetails = () => {

    const [datas,setDatas]=useState(MyDatas)
    const {donate,setDonate}=useContext(DonateCardComponent)




    const handleClickDonate=(val)=>{
        const status = donate.find((one)=>one.id==val.id)
        if(!status){
            const temp = [...donate,val]
            setDonate(temp);
        }
    }




    const param=useParams()
    
    const oneItem = datas.find(one=>one.id===parseInt(param.id))

  return (
    <div className="max-w-[1300px] mx-auto">
        <div className="bgx overflow-hidden flex items-end h-[60vh] rounded-xl my-6" style={{backgroundImage:`url(${oneItem.image})`}}>
            <div className="p-5 w-full bg-[#0000006b]">
                <button onClick={()=>{handleClickDonate(oneItem)}} className={`font-semibold btn border-none ${oneItem.btnColor} border-none text-white`} >Donate ${oneItem.price}</button>
            </div>
        </div>
        <h1  className="text-3xl font-bold mb-5">{oneItem.title}</h1>
        <p className=" text-justify">{oneItem.description}</p>
    </div>
  )
}

export default ViewDetails