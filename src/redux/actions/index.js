// for Add Item to Cart


export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// for Delete Item Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
