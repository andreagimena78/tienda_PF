import { Link } from "react-router-dom";
import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({lista}) => {
    return(
        <>
            <div className="row g-4">
                {lista.length ? (
                    lista.map((prod) => (
                        <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            < Link to= {`/detail/${prod.id}`} className="text-decoration-none">
                                <Item {...prod}/>
                            </Link>
                        </div>
                    ))
                ):(
                    <p>No hay productos</p>
                )}
            </div>
        
        
        </>
    );
};