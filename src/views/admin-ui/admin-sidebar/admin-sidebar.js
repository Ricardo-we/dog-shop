import { useState } from "react";
import { Link } from "react-router-dom";
import './admin-sidebar.css';

function AdminSideBar() {
    const [navOpen, setNavOpen] = useState(false);    
    const [navClasslist, setNavClasslist] = useState('me-auto bg-dark main-container') 

    const toggleNav = () => {
        if(navOpen){
            setNavOpen(false)
            setNavClasslist('me-auto bg-dark main-container');
        }
        else {
            setNavOpen(true);
            setNavClasslist('me-auto bg-dark main-container active');
        }
    }
    return ( 
        <>
            <div className={navClasslist}>
                <ul className="navbar-nav me-auto text-left">
                    <li className="nav-item">
                        <h2 className="navbar-brand text-white">Administrator</h2>
                    </li>
                    <li className="nav-items bg-dark">
                        <Link 
                            to="/admin/users" 
                            className="bg-dark text-white nav-buttons"
                            >
                            Users
                        </Link>
                    </li>
                    <li className="nav-items bg-dark">
                        <Link 
                            to="/admin/products" 
                            className="bg-dark text-white nav-buttons"
                            >
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
            <button className={navOpen?"btn nav-open-button":"btn nav-close-button"} onClick={toggleNav}><i class="fas fa-bars"></i></button>
        </>
     );
}

export default AdminSideBar;