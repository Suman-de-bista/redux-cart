
export const addTocart = (foods) =>{
    return {
        type:'addToCart',
        payload: foods
    }
}
export const removeItem = (foods) =>{
    return {
        type:'removeItem',
        payload: foods
    }
}
export const increaseItem = (foods) =>{
    return {
        type:'increaseItem',
        payload: foods
    }
}
export const decreaseItem = (foods) =>{
    return {
        type:'decreaseItem',
        payload: foods
    }
}