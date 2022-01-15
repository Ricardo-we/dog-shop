import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { countProducts } from "../shop/cart";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
    let allProducts = countProducts();
    const [totalProducts, setTotalProducts] = useState(0);
    
    useEffect(() => {
        setTotalProducts(allProducts);
        if(allProducts !== totalProducts) setTotalProducts(allProducts);
    })

    return (  
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Dog Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dogs-info">Dogs info</Link>
                    </li>
                    <li className="nav-item ms-auto">
                        <Link className="nav-link" to="/cart">
                            <i className="fas fa-cart-plus"></i>{totalProducts !== allProducts? setTotalProducts(allProducts) : totalProducts}
                        </Link>
                    </li> 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;