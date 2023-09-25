import { useState } from "react"
import { useParams } from "react-router-dom"
import { MyDatas } from "../database/Datas"

const ViewDetails = () => {
    const [datas,setDatas]=useState(MyDatas)
    const param=useParams()
    
    const oneItem = datas.find(one=>one.id===parseInt(param.id))
    console.log(oneItem);

  return (
    <div className="max-w-[1300px] mx-auto">
        <div className="bgx overflow-hidden flex items-end h-[60vh] rounded-xl my-6" style={{backgroundImage:`url(${oneItem.image})`}}>
            <div className="p-5 w-full bg-[#0000006b]">
                <button className={`font-semibold btn border-none ${oneItem.btnColor} border-none text-white`} >Donate ${oneItem.price}</button>
            </div>
        </div>
        <h1  className="text-3xl font-bold mb-5">{oneItem.title}</h1>
        <p>{oneItem.description}</p>
    </div>
  )
}

export default ViewDetails