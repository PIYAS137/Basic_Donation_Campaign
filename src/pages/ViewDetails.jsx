import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MyDatas } from "../database/Datas"
import { DonateCardComponent } from "../context/cardContext"
import { HiArrowLongLeft } from "react-icons/hi2";



const ViewDetails = () => {

    const [datas, setDatas] = useState(MyDatas)
    const { donate, setDonate } = useContext(DonateCardComponent)
    const [toastStatus, setToastStatus] = useState(false)
    const navigate = useNavigate()

    const handleClickDonate = (val) => {
        const status = donate.find((one) => one.id == val.id)
        if (!status) {
            const temp = [...donate, val]
            setDonate(temp);
            setToastStatus(true);
            setTimeout(() => {
                setToastStatus(false)
            }, 3000)
        }
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    const param = useParams()
    const oneItem = datas.find(one => one.id === parseInt(param.id))

    return (
        <div className="max-w-[1300px] mx-auto p-2 md:p-0">
            {toastStatus && <div className=" bg-green-600 rounded-xl text-white top-5 left-5 text-xl p-5 absolute">You Successfully Donate <span className=" font-bold">${oneItem.price}</span></div>}
            <h1 onClick={handleGoBack} className="flex cursor-pointer items-center text-lg pt-3 "><HiArrowLongLeft className="text-xl mr-2" />Go back</h1>
            <div className="bgx overflow-hidden flex items-end h-[60vh] rounded-xl my-6" style={{ backgroundImage: `url(${oneItem.image})` }}>
                <div className="p-5 w-full bg-[#0000006b]">
                    <button onClick={() => { handleClickDonate(oneItem) }} className={`font-semibold btn border-none ${oneItem.btnColor} border-none text-white`} >Donate ${oneItem.price}</button>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-5">{oneItem.title}</h1>
            <p className=" text-justify">{oneItem.description}</p>
        </div>
    )
}

export default ViewDetails