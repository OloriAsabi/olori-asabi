import React from 'react'
import { Work } from '../pages/shared_pages'

const PortfolioHome = () => {
  return (
    <div>
          <div className='pl-10 pr-10 pt-10'>
          <h2 className='font-bold p-5 text-xl text-center text-gray-500 services'>Works And Freelances</h2>
          <Work />
          </div>
    </div>
  )
}

export default PortfolioHome