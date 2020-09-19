import React from 'react'

function Category({title, image}) {
    return (
        <div className="category">
            <h1 className="category__title">{title}</h1>
            <img src={image} alt="" className="category__img"/>
            <a href="3">shop more</a>
        </div>
    )
}

export default Category
