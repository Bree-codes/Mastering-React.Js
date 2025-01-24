import {Image} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(response => {
            setProducts(response.data);
        }).catch((error) => {
            setError(error.message);
        });
    },[])


    const handleNavigation =(id) =>{
        navigate("/product/"+id);
    }

    return (
        <div>
            {error ? <h1>{error}</h1> :
                products.map((product) => {
                    return(
                        <div onClick={() => handleNavigation(product.id)} key={product.id}>
                            <Image src={product.image} alt={"Product Image"} width={100} height={100} />
                            <span>{product.title}</span>
                            <span> ksh {product.price}</span>
                        </div>
                    )
                }) }
        </div>
    );
};

export default Products;