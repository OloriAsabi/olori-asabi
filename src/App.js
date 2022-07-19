import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import { Loader, Layout} from "./components";
import { Blog, Contact, Home, Portfolio, Services, Shop } from "./pages";


function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => 
        setIsLoading(false), 2200
        );
  })

  return (
    <div>
    {isLoading
    ?
      (
        <Loader />
      )
      :
      (
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Layout>
        </BrowserRouter>
      )
      }
      </div>
  );
}

export default App;
