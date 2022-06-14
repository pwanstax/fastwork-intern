import axios from "axios";
import Image from "next/image";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";

interface ProductDetailProps {
  productDetail: ProductDetail;
}
interface ProductDetail {
  createdAt: string;
  name: string;
  detail: string;
  product_image: string;
  id: string;
}
interface IParams extends ParsedUrlQuery {
  productID: string;
}

const ProductDetailPage: NextPage<ProductDetailProps> = (
  props: ProductDetailProps
) => {
  return (
    <div className="pdetail-layout">
      <div>{props.productDetail.name}</div>
      <img src={props.productDetail.product_image} width="100%" height="auto" />
      <div>{props.productDetail.detail}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {productID} = context.params as IParams;

  var productDetail = {
    createdAt: "",
    name: "",
    detail: "",
    product_image: "",
    id: "",
  };

  const res = await axios.get(
    `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products/${productID}`
  );
  productDetail = res.data;
  return {
    props: {
      productDetail,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({length: 50}, (_, index) => ({
    params: {
      productID: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ProductDetailPage;
