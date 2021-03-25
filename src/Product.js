import React from 'react'
import './Product.css'

function Product({id,title,image,price,rating}){

    const addToBasket = ()=>{
        dispatchEvent({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:price,
            rating:rating
        }
    })
    }    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;