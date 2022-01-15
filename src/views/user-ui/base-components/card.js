import '../../../required-css/card.css';
import { useState } from 'react';

export default function Card({ cardTitle, cardContent, cardImage }){
    const [cardOpen, setCardOpen] = useState(true);
    
    const handleCard = () => {
        if(cardOpen) setCardOpen(false);
        else setCardOpen(true);
    }

    return ( 
        <div className="card welcome-card" style={styles.card}>
                <img src={cardImage} className="card-img-top" alt={cardTitle} style={styles.cardImage}/>
            <div className="card-body d-flex flex-column align-items-center justify-content-evenly" style={{}}>
                <h5 className="card-title">{cardTitle}</h5>
                <button onClick={handleCard} className={cardOpen?" arrow-btn arrow-btn-open":"arrow-btn"}>
                    <i class="fas fa-arrow-circle-down"></i>
                </button>
            </div>
            <div className={cardOpen? "show-more": "show-more show-more-open"}>
                <p className="">{cardContent}</p>
            </div>
        </div>
  )
}

const styles = {
    cardImage: {
        objectFit:"cover",
        width: "100%",
        height: "200px",
    },
    card: {
        marginTop:"30px",
        marginBottom:"30px",
        width: "20rem",
        // height: "22rem"
    }
}