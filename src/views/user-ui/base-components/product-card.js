import { Link } from "react-router-dom";

function ProductCard({ productName, productPrice, productImage, path }) {
    return ( 
    <Link to={path} className="card" style={{width: "20rem", height: "20rem", margin: "10px 10px"}}>
        <img src={productImage} className="card-img-top" alt={productName} style={styles.cardImage}/>
        <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <h5 className="card-text">{productPrice}</h5>
        </div>
    </Link>
    );
}

const styles = {
    cardImage: {
        objectFit:"cover",
        width: "100%",
        height: "220px"
    }
}

export default ProductCard;