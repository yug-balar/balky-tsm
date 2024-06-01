import React from 'react'
import About from './component/page1/About'
import Book from './component/page1/Book'
import Client from './component/page1/Client'
import Crafting from './component/page1/Crafting'
import Enchoying from './component/page1/Enchoying'
import Image from './component/page1/Image'
import Navbar from './component/page1/Navbar'
import Services from './component/page1/Services'
import Shaping from './component/page1/Shaping'
import Vessels from './component/page1/Vessels'
import Callus from './component/page1/Callus'


function App() {
  return (
    <div className='bg-[#EFECE8]'>

      <Navbar />
      <Crafting />
      <Image />
      <About />
      <Vessels />
      <Book />
      <Shaping />
      <Services />
      <Client />
      <Enchoying />
      <Callus />
    </div>
  )
}

export default App

//https://balky-tsm.webflow.io/