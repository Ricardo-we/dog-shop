import NavBar from "../base-components/navbar";
import Card from "../base-components/card";
import dog1 from '../../../img/dog1.jpg';
import dog2 from '../../../img/dog2.jpg';
import dog3 from '../../../img/dog3.jpg';
import dog4 from '../../../img/dog4.jpg';
import dog6 from '../../../img/dog6.jpg';
import '../../../required-css/home.css'
import './../../../required-css/index.css';
import Footer from "../base-components/footer";

function Home() {
    return (
        <div className="body">
            <NavBar />
            <div className="d-flex flex-row align-items-center justify-content-evenly" style={{flexWrap: "wrap"}}>
                <Card 
                    cardTitle="Cuidado" 
                    cardContent="En la veterinaria tenemos el cuidado de cachorros los cuales puedes adquirir" 
                    cardImage={dog1}
                />
                <Card 
                    cardTitle="Baños" 
                    cardContent="También realizamos baños a tus perros a un precio económico" 
                    cardImage={dog2}
                />
                <Card 
                    cardTitle="Veterinaria" 
                    cardContent="Atendemos a tu perro ante cualquier emergencia" 
                    cardImage={dog3}
                />
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col bg-white" style={{height: "250px"}}>
                        <h2>Dogs</h2>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores, dolorum deserunt beatae consequuntur cumque et ad dolor maxime aperiam debitis iste consectetur enim totam quia. Necessitatibus quia numquam in?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <img className="col" src={dog4} style={{height: "250px", objectFit: "cover"}}/>                        
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col bg-white" style={{height: "250px"}}>
                    <h2>Dogs</h2>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores, dolorum deserunt beatae consequuntur cumque et ad dolor maxime aperiam debitis iste consectetur enim totam quia. Necessitatibus quia numquam in?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <img className="col" src={dog6} style={{height: "250px", objectFit: "cover"}}/>
                    <div className="col"></div>
                </div>
            </div>
            <Footer/>
        </div> 
    );
}

export default Home;