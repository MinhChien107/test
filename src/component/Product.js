const Product = (props) => {
    const { img, name, desc, price, sale } = props.product
    return (
        <div className="product">
            <div className='product-image'>
                <img src={img} />
            </div>
            <div className="product-name name-hover">
                <a href='javascript:;'>{name}</a>
            </div>
            <div className='product-desc'>
                {desc}
            </div>
            <div className='product-price'>
                ${price}
            </div>
            {sale && <div className='product-sale'>
                Now only! <span>${sale}</span>
            </div>}
            <div className='product-button'>
                I Want It!
            </div>
        </div>)
}

export default Product