
import { useState } from 'react'

import './App.css'
import DaisyNav from './componants/DaisyNav/DaisyNav'
import Navbar from './componants/Navbar/Navbar'
import PriceOptions from './componants/PriceOptions/PriceOptions'
import LineChart from './componants/LineChart/LineChart'



function App() {


  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
   <h2 className='text-5xl bg-orange-500'>rect + vite</h2>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
 
    </>
  )
}

export default App
