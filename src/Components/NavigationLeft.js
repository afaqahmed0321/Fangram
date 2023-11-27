import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Left from "../Assets/Images/left.png";

function NavigationLeft() {
  return (
    <div>
      <Button  className='bg-transparent custom-buton-radius border-pink'><Image src={Left}/></Button>
    </div>
  )
}

export default NavigationLeft
