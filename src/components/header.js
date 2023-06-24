import { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colorMode } from "./layout"
import favList from "../media/favlist.png"

let cartNum;
export default function Header() {
  const [dataLength, setDataLength] = useState(0);
  let data = JSON.parse(window.localStorage.getItem("cart")) || []
  useEffect(() => {
    setDataLength(data.length)
  }, [])
  function updatedCartNum() {
    data = JSON.parse(window.localStorage.getItem("cart")) || []
    setDataLength(data.length)
  }
  cartNum = createContext(updatedCartNum)
  const mode = useContext(colorMode)
  console.log(mode)
  return (
    <header className={`${mode.dark ? "bg-gray-900 text-gray-400" : "bg-elzero text-white"} yn-transition body-font`}>
      <section className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <figure className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`white`} className="w-8 h-8 yn-transition" id="shop">
              <path d="M22,2H2A1,1,0,0,0,1,3V7A3,3,0,0,0,3,9.82V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.82A3,3,0,0,0,23,7V3A1,1,0,0,0,22,2ZM15,4h2V7a1,1,0,0,1-2,0ZM11,4h2V7a1,1,0,0,1-2,0ZM7,4H9V7A1,1,0,0,1,7,7ZM4,8A1,1,0,0,1,3,7V4H5V7A1,1,0,0,1,4,8ZM14,20H10V16a2,2,0,0,1,4,0Zm5,0H16V16a4,4,0,0,0-8,0v4H5V9.82a3.17,3.17,0,0,0,1-.6,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3.17,3.17,0,0,0,1,.6ZM21,7a1,1,0,0,1-2,0V4h2Z">
              </path>
            </svg>
            <span className="ml-3 text-xl">Store</span>
          </Link>
        </figure>
        <nav className="hidden md:block md:ml-auto">
          <ul className="flex flex-wrap items-center text-base justify-center">
            <li>
              <Link to="/categories/smartphones" className="mr-5 cursor-pointer hover:text-white">Electronics</Link>
            </li>
            <li>
              <Link to="/categories/womens-jewellery" className="mr-5 cursor-pointer hover:text-white">Jewelery</Link>
            </li>
            <li>
              <Link to="/categories/mens-shirts/" className="mr-5 cursor-pointer hover:text-white">Men's Clothing</Link>
            </li>
            <li>
              <Link to="/categories/womens-dresses/" className="mr-5 cursor-pointer hover:text-white">Women's Clothing</Link>
            </li>
          </ul>
        </nav>
        <ul className="flex ml-auto md:ml-0 gap-3 items-center ">
          <li>
            <button onClick={e => mode.setDark(!mode.dark)} className={`${mode.dark && "active"} mode-toggler`}>
              <span className="pointer-events-none ball"></span>
            </button>
          </li>
          <li >
            <Link to="/favlist" className="h-fit flex items-center">
              <button className="relative">
                <svg className="w-7" fill="white" viewBox="0 0 32 32" id="list">
                  <path d="M30 2H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 28H4V4h26v26zM9 18h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0 12h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z">
                  </path>
                </svg>
                <svg className="w-4 absolute -right-1 -top-1" viewBox="0 0 47.5 47.5" id="heart">
                  <defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs>
                  <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                    <path fill="#be1931" d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241">
                    </path>
                  </g>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="inline-flex items-center  border-0 py-1 focus:outline-none  rounded text-base`">
              <button className="inline-flex items-center relative">
                <span className="cart-num"><span>{dataLength}</span></span>
                <svg width="32.402" height="32" fill="white" viewBox="0 0 32.402 32" id="cart">
                  <path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z" />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
export { cartNum };
