import NavBar from "../base-components/navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIURL } from "../../../App";
import { addToCart } from "./cart";

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([{id:1}]);

    const getProduct = async () => {
        const response = await fetch(`${APIURL}/products.php?id=${id}`);
        const productData = await response.json();
        setProduct(productData);
    }

    useEffect(() => {
        getProduct();
    },[])

    return ( 
        <>
            <NavBar/>
            {product.map(item => (
                <div key={item.id} style={styles.productDetailsContainer}>
                    <div className="">
                        <img src={item.image} alt={item.name} style={styles.imageDetail}/>
                    </div>
                    <div style={styles.productDataContainer}>
                        <h3>{item.name}</h3>
                        <h3>Q{item.price}</h3>
                        <p>{item.description}</p>
                        <form method="GET" action="">
                            <button type="submit" className="btn btn-primary" style={styles.addToCartBtn} onClick={() => addToCart({name: item.name, price: item.price})}>
                                add to cart
                            </button>
                        </form>
                    </div>
                </div>
            ))}
        </> 
    );
}

const styles = {
    imageDetail: {
        objectFit: "cover",
        width: "450px",
        height: "450px", 
    },
    productDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    productDataContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "300px"
    },
    addToCartBtn: {
        width: "100%"
    }
}

export default ProductDetail;