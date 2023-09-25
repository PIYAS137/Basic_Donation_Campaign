import React from 'react'
import { Link } from 'react-router-dom'

const DonateCard = ({ data }) => {
    const { title, price, image, id, description, backgroundColor, textColor, titleBgColor, category } = data
    return (
        <div className={`${backgroundColor} flex rounded-xl overflow-hidden space-x-5`}>
            <div className='h-full w-[30%] bgx' style={{backgroundImage:`url(${image})`}}>

            </div>
            <div className='flex py-3 items-center'>
            <div>
                <span className={`${titleBgColor} ${textColor} p-1 rounded-lg text-sm font-semibold inline-block px-3 my-2`}>{category}</span>
                <h1 className={`mb-1 text-xl font-bold`}>{title}</h1>
                <h1 className={`mb-2 text-lg font-bold ${textColor}`} >${price}.00</h1>
                <Link to={`/donation/${id}`}><button className={`${data.btnColor} text-white p-1 px-3 rounded-lg font-semibold`}>View Details</button></Link>
            </div>
            </div>
        </div>
    )
}

export default DonateCard