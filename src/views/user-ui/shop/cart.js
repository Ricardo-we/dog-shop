import NavBar from '../base-components/navbar';
import { useState } from 'react';

function Cart() {
    const [cartProducts, setCartProducts] = useState(getAllProducts()? getAllProducts() : 0);
    let totalPrice = 0.50;
    let productCount = -1;

    
    if(cartProducts.length > 0){        
        cartProducts.forEach(product => {
            totalPrice += parseFloat(product.price)
        });
        return ( 
            <>
            <NavBar/>
            <div className="d-flex flex-row justify-content-evenly" style={{flexWrap: "wrap"}}>
                <div className="container-sm" style={{height: '400px', overflowY: "scroll"}}>
                    {cartProducts.map(product => {
                        productCount += 1
                        let id = productCount;
                        return(
                            <div className="card" key={productCount}>
                            <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                                <h4>{product.name}</h4>
                                <h4>Q{product.price}</h4>
                                <button className='btn btn-danger' onClick={() => {
                                    removeProduct(id)
                                    setCartProducts(getAllProducts())
                                }}>
                                    remove
                                </button>
                            </div>
                        </div>
                    )})}
                </div>

                <div className="container-sm">
                    <h1>total: Q{totalPrice.toFixed(2)}</h1>
                    <button className="btn btn-primary" style={{width: "100%"}}>
                        buy
                    </button>
                </div>
            </div> 
        </>  
    );
    }
    else{
        return ( 
            <>
            <NavBar/>
            <div className="d-flex flex-row justify-content-evenly" style={{flexWrap: "wrap"}}>
                <div className="container-sm" style={{height: '400px', overflowY: "scroll"}}>
                    <h1>NOT PRODUCTS YET</h1>
                </div>

                <div className="container-sm">
                    <h1>total: Q0</h1>
                    <button className="btn btn-primary" style={{width: "100%"}}>
                        buy
                    </button>
                </div>
            </div> 
        </> 

        );
    }
}

export default Cart;

function removeProduct(id){
    const allProducts = getAllProducts();
    const newCart = [];
    for(let i in allProducts){
        if(id != i){
            newCart.push(allProducts[i]);
        }
    }
    sessionStorage.removeItem('products');
    sessionStorage.setItem('products', JSON.stringify(newCart));
    console.log(id);
    return newCart;
}

export function countProducts(){
    try{

        let allProducts = JSON.parse(sessionStorage.getItem('products'));
        return allProducts.length;
    }
    catch(e){
        console.log(e)
    }
}

export function getAllProducts(){
    try{
        const products = JSON.parse(sessionStorage.getItem('products'));
        return products;
    }
    catch(e){
        console.log(e);
    }
}   

export function addToCart(product){
    let allProducts = JSON.parse(sessionStorage.getItem('products'));
    if(allProducts) allProducts.push(product);
    else allProducts = [product];
    sessionStorage.setItem('products', JSON.stringify(allProducts))
}