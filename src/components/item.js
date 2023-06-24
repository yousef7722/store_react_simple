import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartNum } from './header'
const Item = (props) => {
  const updateCartNum = useContext(cartNum);
  let item = props.item
  let favData = JSON.parse(window.localStorage.getItem("fav")) || []
  let data = JSON.parse(window.localStorage.getItem("cart")) || []
  
  const addToCart = (ev, e) => {
    data = JSON.parse(window.localStorage.getItem("cart")) || []
    let msg = "In Cart"
    if (data.length>0) {
      let alreadyAdded = false
      let updatedCart = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].id !== e.id) {
          updatedCart.push(data[i])
        } else {
          alreadyAdded = true
          msg = "Add to Cart"
        }
      }
      if (alreadyAdded === false) {
        msg = "In Cart"
        updatedCart = [...updatedCart, { ...e, quantity: 1 }]
      }
      window.localStorage.setItem("cart", JSON.stringify(updatedCart))
    } else {
      let cart = [{ ...e, quantity: 1 }]
      window.localStorage.setItem("cart", JSON.stringify(cart))
    }
    ev.target.innerHTML = msg
    updateCartNum()
  }

  const btnState = (id) => {
    let msg = "Add to Cart"
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
          msg = "In Cart"
        }
      }
    }
    return msg
  }

  const addFav = (ev, id)=>{
    favData = JSON.parse(window.localStorage.getItem("fav")) || []
    let updatedFav = [];
    let alreadyFav = false;
    if(favData.length>0){
      for(let i=0;i<favData.length;i++){
        if(favData[i] !== id){
          updatedFav.push(favData[i])
        }else{
          alreadyFav = true;
        }
      }
      if(!alreadyFav){
        updatedFav.push(id);
      }
    }else{
      updatedFav = [id];
    }
    ev.target.classList.toggle("text-red-600")
    window.localStorage.setItem("fav", JSON.stringify(updatedFav))
  }

  const favState = (id)=>{
    let msg = ""
    if (favData.length > 0) {
      for (let i = 0; i < favData.length; i++) {
        if (id === favData[i]) {
          msg = "text-red-600"
        }
      }
    }
    return msg;
  }
  return (
    //lg:w-1/4 md:w-1/2 
    <figure className={`max-h-item  ${props.class || "w-1/4"} shadow-md flex  px flex-col justify-between p-4`}>
      <Link to={`/single/${item.id}`} className={`${props.h && props.h} block relative w-full h-48 rounded overflow-hidden`}>
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={item.thumbnail}
        />
      </Link>
      <figcaption className="mt-4">
        <h3 className="tracking-widest title-font mb-1">
          {item.title}
        </h3>
        <h2 className="title-font font-medium">
          {item.description}
        </h2>
        <section className="flex items-center">
          <p className="mt-1">${item.price}</p>
          <button onClick={(ev) => addToCart(ev, item)} className="flex ml-auto text-white bg-indigo-500 border-0 py-1 px-3 h-fit focus:outline-none hover:bg-indigo-600 rounded">
            {
              btnState(item.id)
            }
          </button>
          <button onClick={(ev)=>addFav(ev, item.id)} className={`rounded-full w-7 h-7 bg-gray-200  p-0 border-0 inline-flex items-center justify-center transition-all ${favState(item.id)} hover:text-red-500 text-gray-500 ml-4`}>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="pointer-events-none w-4 h-4" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </section>
      </figcaption>
    </figure>
  )
}

export default Item