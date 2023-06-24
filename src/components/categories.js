import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from './item';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const { id: cate } = useParams()
  useEffect(() => {
    console.log("cate effect")
    fetch(`https://dummyjson.com/products/category/${cate}`)
      .then((res) => res.json())
      .then((json) =>{console.log(json); setCategory(json.products);return json})
      .catch(e => console.log(e))
  }, [cate]);
  return (
    <>
      {
        category.length > 0 ?
          <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {category.map(e => <Item item={e} />)}
            </div>
          </section>
          : <h1 className="w-full mt-7 text-center">loading</h1>
      }
    </>
  )
}

export default Categories