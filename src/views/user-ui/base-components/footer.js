import '../../../required-css/footer.css';

function Footer() {
    return ( 
        <footer className='footer'>
            <a href="#" className="link-icon">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="link-icon">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="link-icon">
                <i className="fab fa-github"></i>
            </a>
            <a href="" className="link-icon">
                <i className="fab fa-twitter"></i>
            </a>
            <Link to="admin">
                <i class="fas fa-users-cog"></i>
            </Link>
        </footer> 
    );
}

export default Footer;