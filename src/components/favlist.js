import React, { useEffect, useState } from 'react'

const FavList = () => {
  let favs = JSON.parse(window.localStorage.getItem("fav")) || [];
  const [data, setData] = useState([])
  useEffect(() => {
    favs.map(e => fetch(`https://dummyjson.com/products/${e}`).then(e => e.json()).then(e => setData(pre => [...pre, e])).catch(e => console.log(e)))
  }, [])
  return (
    <article className='container m-auto'>
      <ul className=''>
        {
          data.length?
          data.map(e =>
            <li className='flex gap-8 shadow-md p-4 text-gray-800'>
              <img className='w-40 object-contain' src={`${e.thumbnail}`} alt="" />
              <div>
                <p>{e.title}</p>
                <p className='max-w-xl'>{e.description}</p>
                <span>
                  <p className='text-lg'>{e.price}<span className='text-sm text-green-600'>$</span></p>
                  <p>{e.rating}/5</p>
                  <p>{e.stock} in stock</p>
                </span>
              </div>
            </li>
          )
          :<h1 className='w-fit text-4xl m-auto'>No favourite items yet, add some!</h1>
        }
      </ul>
    </article>
  )
}

export default FavList