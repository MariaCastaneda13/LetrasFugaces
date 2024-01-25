import React from 'react'
import './Item.css'
const Item= ({id, nombre, precio, img}) => {
    return(
        <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>ID: {id} </p>
            <p>Precio:{precio} </p>
            <button>Ver detalles</button>
        </div>
    )
}

export default Item