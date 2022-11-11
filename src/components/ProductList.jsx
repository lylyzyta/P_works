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
                 {products.map((product) => (
            <section  className={styles.cardStyle} key={product.id} >
             <>
             <img className={styles.productsImg} src={product.img}
               alt="logo-icon"/>
               <br></br>
               <br></br>
            <span  className={styles.productsTitle}>{product.title}</span>
            <span className={styles.productsPrice}>Precio : $ {product.price}</span> 
           </>
           </section>
         ))}

  
   </section>
 );
}

export { ProductList };