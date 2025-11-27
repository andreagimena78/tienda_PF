import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {getProductById} from "../../services/products";



export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const{id}= useParams();
    
    useEffect(() => {
        getProductById(id)
        .then((data) => setDetail(data))
        .catch((err) => console.log(err));
    },[id]);

    return(
        <main className="item-detail-container">
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail}/>
            ):(
                <p>Cargando...</p>
            )}
        </main>
    );
};