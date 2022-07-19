import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
          <div className="min-h-screen ">
          <div className="">
          <Navbar/>
          </div>
          <main >
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
           </div>
    )
  }
  
  export default Layout