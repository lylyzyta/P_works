import React from "react";
import { useEffect, useState } from "react";
import getProducts from "../helpers/api";
import styles from "./ProductList.module.css";
import Popup from "./Popup";


function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts("https://gnk.onm.mybluehost.me/products_api/").then((json) =>
      setProducts(json)
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false);
 const [uniqueProduct, setUniqueProduct] = useState([]);
  const togglePopup = (productID) => {
    setIsOpen(!isOpen);
    fetch(`https://gnk.onm.mybluehost.me/products_api/${productID}`)
    .then((response) => response.json())
    .then((data) => setUniqueProduct(data));
  };
 
  return (
    <section className={styles.productsContainer}>
                 {products.map((product) => (
            <section  className={styles.cardStyle} key={product.id}  >
             <>
             <img className={styles.productsImg} src={product.img}
               alt="logo-icon"/>
               <br></br>
               <br></br>
            <span  className={styles.productsTitle}>{product.title}</span>
            <span className={styles.productsPrice}>Precio : $ {product.price}</span> 
           </>

           <button
                    className={styles.productAdd}
                    onClick={() => togglePopup(product.id)}
                  >
                    {" "}
                    Description{" "}
                  </button>

           {isOpen && (
                    <Popup
                      content={
                        <>
                          <b className={styles.productDetail}>
                          {uniqueProduct}
                          
                          </b>
                          <br></br>
                          <br></br>
                          <br></br>

                          <button
                            className={styles.productClose}
                            onClick={togglePopup}
                          >
                            Close
                          </button>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
           </section>
         ))}

  
   </section>
 );
}

export { ProductList };