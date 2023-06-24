import { useEffect, useState } from "react";
import Item from "./item";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      {
        products.length > 0 ?
          <div className="max-w-screen-3xl p-2 mx-auto flex flex-wrap ">
            <section className="flex flex-wrap sm">
              <section className="flex flex-col w-1/2 md:w-1/4 justify-between">
                <Item item={products[0]} class="md:h-1/4 w-full" h="h-full" />
                <Item item={products[1]} class="h-1/2 w-full max-h-item2" h="h-full" />
                <Item item={products[2]} class="h-1/4 w-full" h="h-full" />
                {/* {products.slice(0, 3).map(e => <Item item={e} />)} */}
              </section>
              <section className="flex flex-col w-1/2 md:w-1/2 h-full justify-between">
                <Item item={products[3]} class="w-full" h="h-full" />
                <div className="flex">
                  <Item item={products[9]} class=" w-1/2" />
                  <Item item={products[5]} class=" w-1/2" />
                </div>
                <Item item={products[6]} class="w-full" h="h-full" />
              </section>
              <section className="flex flex-col w-1/2 md:w-1/4 justify-between">
                <Item item={products[7]} class="h-1/4 w-full" h="h-full" />
                <Item item={products[8]} class="h-1/4 w-full" h="h-full" />
                <Item item={products[4]} class="h-1/2 w-full max-h-item2" h="h-full" />
              </section>
            </section>
            <section className="flex flex-wrap">
              {products.slice(10).map((e,i) => <Item item={e} key={i} class="w-1/4" />)}
            </section>
          </div>
          : <h1 className="w-full mt-7 text-center">loading</h1>
      }
    </>
  );
}
