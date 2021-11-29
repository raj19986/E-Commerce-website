import React, {createContext, useState} from "react"
import iphone from "../assest/iphone.jpg";
import headphones from "../assest/headphones.jpg"
import microphone from "../assest/microphone.jpg"
import rings from "../assest/rings.jpg"
import shoes from "../assest/shoes.jpg"
import watch from "../assest/watch.jpg"
import perfum from "../assest/perfume.jpg"
import dslr from "../assest/dslr.jpg"


export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState( [
        {id: 1, name: 'DSLR', price: 40, image: dslr,status: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum, status: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch, status: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes, status: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone, status: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones, status: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone, status: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings, status: 'new'},
      ]);

    return(
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}

        </ProductsContext.Provider>

    )


}
export default ProductsContextProvider;