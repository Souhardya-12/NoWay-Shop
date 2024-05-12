import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="pdl">
            <div className="pdil">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="pdi">
                <img className='pdmi' src={product.image} alt="" />
            </div>
        </div>
        <div className="pdr">
            <h1>{product.name}</h1>
            <div className="pdrs">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="pdrp">
                <div className="pdrpo">${product.old_price}</div>
                <div className="pdrpn">${product.new_price}</div>
            </div>
            <div className="pdrd">
            </div>
            <div className="pdrsize">
                <h1>Select Size</h1>
                <div className="pdrsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='pdrb' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            {/*<p className="pdrc"><span>Category :</span>Women, T</p>
            <p className="pdrc"><span>Tags :</span>Modern, L</p>*/}
        </div>
    </div>
  )
}

export default ProductDisplay