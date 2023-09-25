import  { useState } from 'react'
import { MyDatas } from '../../database/Datas'
import Card from './Card'

const Cards = () => {

    const [cards,setCards]=useState(MyDatas)


  return (
    <div className='max-w-[1300px] mx-auto my-10 grid grid-cols-4 gap-5'>
        {cards.map((one)=><Card key={one.id} data={one}/>)}
    </div>
  )
}

export default Cards