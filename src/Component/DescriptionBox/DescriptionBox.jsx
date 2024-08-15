import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
    const { product } = props;
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>{product.description}</p>
            <p> Crafted from premium, breathable cotton, this crop top is designed for comfort and style. 
            The modern cut is perfect for layering or wearing on its own during warm weather. Its soft fabric gently drapes over the body, creating a flattering silhouette for all body types. The vibrant color options and chic design make it an essential piece for your casual wardrobe. Pair it with high-waisted jean
            s, skirts, or shorts for a versatile look that can be dressed up or down effortlessly.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
