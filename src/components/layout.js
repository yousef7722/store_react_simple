import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { createContext, useState } from "react";
const colorMode = createContext(null);

const Layout = () => {
  const[dark, setDark]=useState(false)

  return (
    <>
    <colorMode.Provider value={{dark:dark, setDark:setDark}}>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer/>
    </colorMode.Provider>
    </>
  )
}
export default Layout
export {colorMode}