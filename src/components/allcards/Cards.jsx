import React, { useContext, useEffect, useState } from 'react'
import { MyDatas } from '../../database/Datas'
import Card from './Card'
import { DonateCardComponent } from '../../context/cardContext'

const Cards = () => {
  const { searchText,submitStatus,setSubmitStatus } = useContext(DonateCardComponent)
  const [finalData, setFinalData] = useState(MyDatas)
  const [cards, setCards] = useState(finalData)

  useEffect(() => {
    const temp = finalData.filter((one) => one.category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    setCards(temp)
  }, [searchText])

  const handleClickStatus=()=>{
    setCards(finalData)
    setSubmitStatus(false)
  }



  return (
    <React.Fragment>
      <div className='max-w-[1300px] mx-auto'>
      {submitStatus && <button onClick={handleClickStatus} className='btn bg-red-500 hover:bg-red-300 text-white mt-4'>Reset Data</button>}
        <div className='p-2 md:p-0 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {cards.map((one) => <Card key={one.id} data={one} />)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cards