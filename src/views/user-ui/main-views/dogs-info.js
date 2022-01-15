import NavBar from "../base-components/navbar";
import dog2 from '../../../img/dog2.jpg';
import './../../../required-css/index.css';
import './../../../required-css/dogs-info.css';
import Footer from "../base-components/footer";

function DogsInfo() {
    return ( 
        <div className="body">
            <NavBar/>
            
            <div className="intro-main-container">
                <img src={dog2} alt="" className="intro-image"/>
                <div className="intro-container">
                    <h2>Lorem</h2>                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit totam cumque doloremque quod quibusdam, deleniti voluptas nobis debitis numquam itaque ad magni assumenda dolorem repellat veritatis odio nam qui aut temporibus odit? Cum vel porro fugiat debitis veniam ipsa veritatis beatae quidem eos, iure labore atque eius aut velit quisquam vero rem placeat quaerat tempore eveniet id hic est. Sed cumque velit id saepe maxime minima repellendus corporis, pariatur adipisci magnam veniam fugiat nostrum, rem odio ipsam consequatur, deleniti voluptatem animi modi quam corrupti architecto eius. Impedit, voluptas amet neque eos a perferendis nisi perspiciatis officiis accusantium animi quas veniam?
                    </p>
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div className="bg-dark" style={styles.innerMainContainer}>
                    <h2 className="text-white">About us</h2>
                    <p className="text-white">
                        We are a small business of puppies all have their care in addition to being vaccinated and with everything you need for you to acquire one we can take it to your home or you can come for it, you just have to do a paperwork and review the place where the puppy will be
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const styles = {
    mainContainer: {
        display:"flex", 
        alignItems: "center", 
        justifyContent: "space-evenly", 
        width: "100%",
        height: "300px",
        backgroundColor: "white",
        marginTop: "50px",
        marginBottom: "50px"
    },
    innerMainContainer: {
        width: "92%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "240px",
        fontSize: "13px",
    }
}

export default DogsInfo;