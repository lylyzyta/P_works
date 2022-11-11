import React from "react";
import { useEffect, useState } from "react";
import getProducts from "../helpers/api";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts("https://gnk.onm.mybluehost.me/products_api/").then((json) =>
      setProducts(json)
    );
  }, []);
 
  return (
    <section className={styles.productsContainer}>
       <section >
       <div className={styles.cardContainer}>
         {products.map((product) => (
            <section  className={styles.cardStyle} key={product.id} >
             <>
             <img
               className={styles.productsImg}
               src={product.img}
               alt="logo-icon"
             />
              <span  className={styles.productsTitle}>{product.title}</span>
             <span className={styles.productPrice}>$ {product.price}</span> 
                           
            
           </>
           </section>
         ))}
       </div>
     </section>
   </section>
 );
}

export { ProductList };