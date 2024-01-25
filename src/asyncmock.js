const productos=[
    {id:1, nombre: "HP", precio: 75.000, img:"../public/imagenes/libroHP.jpg", idCat:"1"},
    {id:2, nombre: "Los juegos del hambre", precio: 72.500, img:"../public/imagenes/LibroLJDH.png", idCat:"1"},
    {id:3, nombre: "Neurociencia de las emociones", precio: 100.500, img:"../public/imagenes/libroneurociencia.jpg", idCat:"2"},
    {id:2, nombre: "Neurociencia aplicada al coaching", precio: 93.000, img:"../public/imagenes/libroneurocienciacoaching.jpg", idCat:"2"},


]

export const getProductos =() => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos);
            
        }, 100);
    })

}

export const getUnProducto =(id) => {
    return new Promise(resolve=>{
        setTimeout( () => {
            const producto= productos.find(prod => prod.id === id);
            resolve (producto);
        },100)
    })
}

//Se crea una función que retorne toda la categoría
export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise(resolve=>{
        setTimeout( ()=>{
            const productosCategoria= productos.filter(prod=>prod.idCat===idCategoria);
            resolve(productosCategoria)
        },100)
    })

}