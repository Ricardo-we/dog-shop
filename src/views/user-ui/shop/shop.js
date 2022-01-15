import NavBar from "../base-components/navbar";
import { APIURL } from "../../../App";
import { useState, useEffect } from "react";
import ProductCard from "../base-components/product-card";

function Shop() {
    const PRODUCTSURL = `${APIURL}/products.php`;    
    const [products, setProducts] = useState([{id: 1}]);
    
    const getProducts = async () => {
        const response = await fetch(PRODUCTSURL);
        const jsonResponse = await response.json();
        setProducts(jsonResponse);
    }    

    useEffect(() => {
        getProducts();
    },[])

    return ( 
        <>
            <NavBar/>
            <div className="d-flex flex-row align-items-center justify-content-evenly" style={{flexWrap: "wrap"}}>
                {products.map(item => <ProductCard 
                        key={item.id} 
                        productName={item.name} 
                        productImage={item.image}
                        productPrice={item.price}
                        path={'/product-detail/'+item.id}
                />)
                }
            </div>
        </> 
    );
}

export default Shop;