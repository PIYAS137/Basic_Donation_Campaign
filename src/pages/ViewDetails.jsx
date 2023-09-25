import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { MyDatas } from "../database/Datas"

const ViewDetails = () => {
    const [datas,setDatas]=useState(MyDatas)
    const [thisData,setThisData]=useState([])
    const param=useParams()
    
    const oneItem = datas.find(one=>one.id===parseInt(param.id))
    console.log(oneItem);

  return (
    <div className="max-w-[1300px] mx-auto bg-red-300">
        <img src={oneItem.image} alt="" />
    </div>
  )
}

export default ViewDetails