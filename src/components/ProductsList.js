import React from "react";

const ProductsList = ({ products, deleteProduct, selectProduct }) => {
  console.log(products[0]);
  return (
    <ul className="products-list">
      {products.map((product, i) => (
        <li className="product-item" key={product.ProId}>
          <strong>{product.Name}</strong>
          <ul>
            <li>Category: {product.Category}</li>
            <li>
              Descripcion: <b>{product.Description}</b>
            </li>
            <li>Imagen Producto: {product.ProductImg}</li>
            <button
              className="btn btn__delete"
              onClick={() => deleteProduct(i)}
            >
              Delete
            </button>
            <button
              className="btn btn__edit"
              onClick={() => selectProduct(product, i)}
            >
              Editar
            </button>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
