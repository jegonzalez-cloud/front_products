import React, { useState, useEffect } from "react";

const ProductsForm = ({
  addProduct,
  productSelected,
  deselectProduct,
  updateProduct
}) => {
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDesc] = useState("");
  const [ProductImg, setImg] = useState("");

  useEffect(() => {
    if (productSelected.Name) {
      setName(productSelected.Name);
      setCategory(productSelected.Category);
      setDesc(productSelected.Desc);
      setImg(productSelected.Img);
    } else {
      setName("");
      setCategory("");
      setDesc("");
      setImg("");
    }
  }, [productSelected]);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      Name,
      Category,
      Description,
      ProductImg
    };
    if (productSelected.Name) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
  };

  return (
    <form onSubmit={submit} className="products-form">
      <div className="input-container">
        <label htmlFor="product-name">Nombre</label>
        <input
          type="text"
          id="product-name"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
      </div>

      <div className="input-container">
        <label htmlFor="product-category">Categoría</label>
        <input
          type="number"
          id="product-category"
          onChange={(e) => setCategory(e.target.value)}
          value={Category}
        />
      </div>

      <div className="input-container">
        <label htmlFor="product-price">Descripcion</label>
        <textarea
          id="product-descripcion"
          onChange={(e) => setDesc(e.target.value)}
          value={Description}
          className="text__area"
        />
      </div>

      <div className="input-container">
        <label htmlFor="product-price">Imagen Producto</label>
        <input
          type="file"
          id="product-img"
          onChange={(e) => setImg(e.target.value)}
          value={ProductImg}
        />
      </div>

      <button className="btn btn__submit">Submit</button>
      <button
        className="btn btn__cancel"
        type="button"
        onClick={deselectProduct}
      >
        Cancelar
      </button>
    </form>
  );
};

export default ProductsForm;
