import React from 'react'
import DonateCard from './DonateCard'

const DonateCards = ({donate}) => {
  return (
    <React.Fragment>
        {donate.map((one)=><DonateCard key={one.id} data={one}/>)}
    </React.Fragment>
  )
}

export default DonateCards