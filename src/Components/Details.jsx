import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(){
    let stateArray = useState([
        {name: "Laptop", price: 5000},
        {name: "Headphones", price: 5000},
        {name: "Smartphones", price: 5000},
        {name: "Earphones", price: 5000},
    ]);
    let products = stateArray[0];
    return(
        <div>
            {products.map(function(pp){
                return(
                    <ProductCard name={pp.name} price={pp.price}></ProductCard>
                )
            })}
        </div>    );
}

export default ProductList