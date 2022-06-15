import type {NextPage} from "next";
import {useEffect, useState} from "react";
import Head from "next/head";
import axios from "axios";

import ProductCard from "../components/productCard";
import Pagination from "../components/pagination";
import FilterPanel from "../components/filterPanel/filterPanel";
import Promotion from "../components/promotions";

interface Product {
  createdAt: string;
  name: string;
  detail: string;
  product_image: string;
  id: string;
}

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  var numberOfProduct = 50;
  useEffect(() => {
    const getProductData = async () => {
      var products: Product[] = [];
      try {
        const data: Product[] = (
          await axios.get(
            `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products?page=${activePage}&limit=15`
          )
        ).data;
        // console.log(data);
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    getProductData();
  }, [activePage]);

  return (
    <div className="page-container">
      <h1>ออกแบบโลโก้ (Logo)</h1>
      <div className="promotion-section">
        <Promotion />
      </div>

      <div className="filter-panel">
        <FilterPanel />
      </div>
      <div className="under-filter">
        <p className="first">พบงาน {numberOfProduct} รายการ</p>
        <p className="last">หน้า {activePage} จาก 4</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            product_image={product.product_image}
            id={product.id}
          />
        ))}
      </div>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        numberOfPage={Math.ceil(numberOfProduct / 15.0)}
      />
    </div>
  );
};

export default Home;
