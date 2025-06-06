import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses"
import ContactUs from '@/scenes/contactUs'
import Footer from "./scenes/footer";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setTopOfPage(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
          window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
      <div className='app bg-gray-20'>
          <Navbar topOfPage = {topOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Home setSelectedPage={setSelectedPage} />
          <Benefits setSelectedPage={setSelectedPage}/>
          <OurClasses setSelectedPage={setSelectedPage}/>
          <ContactUs setSelectedPage={setSelectedPage} />
          <Footer/>

      </div>
  )
}

export default App
