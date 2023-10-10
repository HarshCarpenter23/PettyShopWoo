const Product = (props) => {

    const { product } = props;
    return (
        
       <div className="card mb-3" >
            <h3 className="card-header">{product.name}</h3>
            <img className="d-block user-select-none" width="100%" height="200" 
            src={product.images[0].src} />
            <div className="card-body">
            <h6 className="card-subtitle text-muted">₹{product.price}</h6>
            <a href="" className="btn btn-secondary text-center" >View</a>
            </div>
  
        </div>
   
    )
}

export default Product;