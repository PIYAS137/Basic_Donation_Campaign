import React from 'react'
import DonateCard from './DonateCard'

const DonateCards = ({donate,len}) => {
  return (
    <React.Fragment>
        {donate.slice(0,len).map((one)=><DonateCard key={one.id} data={one}/>)}
    </React.Fragment>
  )
}

export default DonateCards