import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Right from "../Assets/Images/right.png"

function NavigationRight() {
  return (
    <div>
      <Button  className='bg-transparent custom-buton-radius border-pink'><Image src={Right}/></Button>
    </div>
  )
}

export default NavigationRight
