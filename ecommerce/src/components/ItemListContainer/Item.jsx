import React from 'react'
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, id }) => {
    return (
        <div key={id} className="card-item">
            <h3 style={{ justifySelf: "center" }}>{nombre}</h3>
            <img className="img" src="./src/assets/images/clavedesol.jpg" />
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    );
};

export default Item;