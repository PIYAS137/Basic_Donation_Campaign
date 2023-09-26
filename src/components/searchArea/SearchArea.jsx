import { useContext, useState } from 'react'
import { DonateCardComponent } from '../../context/cardContext'

const SearchArea = () => {

    const {setSearchText,setSubmitStatus} = useContext(DonateCardComponent)
    const [text,setText]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearchText(text)
        setText('')
        setSubmitStatus(true)
    }


  return (
    <div style={{ backgroundImage: `url('https://i.ibb.co/hssyLX9/Clothing-half-trans.png')` }} className='bgx flex flex-col items-center py-10 md:py-16 lg:py-32'>
        <h1 className='text-black text-2xl md:text-3xl lg:text-4xl font-bold pb-4 md:pb-6 lg:pb-8'>I Grow By Helping People In Need</h1>
        <form onSubmit={handleSubmit} className='bg-red-500 rounded-lg overflow-hidden'>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} className='p-2 pl-3 outline-none' type="text" placeholder='Search here' />
            <button className='px-3 text-white'>Search</button>
        </form>
    </div>
  )
}

export default SearchArea