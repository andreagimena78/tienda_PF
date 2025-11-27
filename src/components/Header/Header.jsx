import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return(
        <header>
            <div className="header-container">
                <h1>Mi tienda</h1>
                <img 
                src="/image/gatito.png" 
                alt="gatito"
                className="header-icon" />
            </div>
            <p>Regalos con Magia</p>
            <Nav/>
        </header>
    );
}; 
