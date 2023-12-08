import React, { useEffect, useState } from 'react'
import "./PlansScreen.css"
// import { useSearchParams } from 'react-router-dom'
import db from "../firebase";

function PlansScreen() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        db.collection("products")
            .where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection
                        ("prices").get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        };
                    });
                });
                setProducts(products);

            })
            
          
    }, []);
   const loadCheckout = async(priceId) =>{

   }
    console.log(products);
   
    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                console.log("productData say hii",productData.prices)
                return (
                    <div key={productId} className='planScreen_Plan'>
                        <div className='planScreen_info'> 
                            {productData.name}<br/>
                            {productData.description}
                        </div>
                        <button onClick={loadCheckout(productData.prices)} >Subscribe</button>
                        </div>
        )
            }

            )}
        </div>
    )
}

export default PlansScreen
