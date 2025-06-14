import {Image} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Product = () => {
    const productId = useParams();
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/"+productId.productId)

            .then(response => {
                console.log(response);

                setResponse(response.data);
            })
            .catch(error=>{
                setError(error.message);
            })
    }, [productId])

    return (
        <div>
            {error ? <h1>{error}</h1>: response !== "" ?
                <div>
                    <Image src={response.image} alt={"Product image"} width={200} height={200} />
                    <span>{response.title}</span>
                    <span> ksh {response.price}</span>
                    <span>{response.description}</span>
                </div>: <span>Product Not Found</span>
            }
        </div>
    );
};

export default Product;
