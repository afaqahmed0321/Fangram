import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Featured from '../Components/Featured'
import NavigationLeft from '../Components/NavigationLeft'
import NavigationRight from '../Components/NavigationRight'
import PopularCategories from '../Components/PopularCategories'
import CustomButton from '../Components/CustomButton'
import ProfileCard from '../Components/ProfileCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Featured/>
      <PopularCategories/>
    </div>
  )
}

export default Home
