import React from 'react'
import './Category.css';

function Category({title, image}) {
    return (
        <div className="category">
            <h2 className="category__title">{title}</h2>
            <img src={image} alt="" className="category__img"/>
            <a href="3">shop more</a>
        </div>
    )
}

export default Category
