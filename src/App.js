import { useState, useEffect } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import "./styles.css";
import Axios from "axios";

const App = () => {
  let defaultProducts = [{}];

  useEffect(() => {
    // console.log("jojojojo");
    let url = "https://localhost:44301/api/product/";
    Axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const insertProduct = async (product) => {
    let url = "https://localhost:44301/api/Products";
    let res = await Axios.post(url, JSON.stringify(product));
    res.data.JSON;
  };

  const [products, setProducts] = useState(defaultProducts);
  const [productSelected, setProductSelected] = useState({});
  const [productSelectedIndex, setProductSelectedIndex] = useState(-1);

  const addProduct = (product) => {
    console.log(product);
    insertProduct(product);
    setProducts([...products, product]);
  };

  const deleteProduct = (indexProduct) => {
    const filteredProducts = products.filter(
      (product, i) => indexProduct !== i
    );
    setProducts(filteredProducts);
  };

  const selectProduct = (product, index) => {
    setProductSelected(product);
    setProductSelectedIndex(index);
  };

  const deselectProduct = () => setProductSelected({});

  const updateProduct = (editedProduct) => {
    const editedProducts = products.map((product, i) => {
      if (i === productSelectedIndex) {
        return editedProduct;
      } else {
        return product;
      }
    });
    setProducts(editedProducts);
  };

  // console.log(productSelectedIndex);

  return (
    <div className="app">
      <h1>Products</h1>
      <hr className="title" />

      <ProductsForm
        addProduct={addProduct}
        productSelected={productSelected}
        deselectProduct={deselectProduct}
        updateProduct={updateProduct}
      />
      <ProductsList
        products={products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
};

export default App;
