import axios from "axios";

import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import ImageGallery from "../components/detailPage/imageGallery";
import InfoSection from "../components/detailPage/infoSection";
import PackageContent from "../components/detailPage/packageContent";

interface ProductDetailProps {
  productDetail: ProductDetail;
  sellerInfos: SellerInfo[];
  reviews: BuyerReview[];
}
interface ProductDetail {
  createdAt: string;
  name: string;
  detail: string;
  product_image: string;
  id: string;
}
interface SellerInfo {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  productId: string;
}

interface BuyerReview {
  createdAt: string;
  comment: string;
  id: string;
  productId: string;
}

interface IParams extends ParsedUrlQuery {
  productID: string;
}

const ProductDetailPage: NextPage<ProductDetailProps> = (
  props: ProductDetailProps
) => {
  return (
    <div className="pdetail-layout">
      <ImageGallery product_image={props.productDetail.product_image} />
      <InfoSection
        name={props.productDetail.name}
        detail={props.productDetail.detail}
        sellerInfo={props.sellerInfos[0]}
        reviews={props.reviews}
      />
      <PackageContent />
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
  var sellerInfos = [];
  var reviews = [];

  const res = await axios.get(
    `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products/${productID}`
  );
  const seller = await axios.get(
    `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products/${productID}/users`
  );
  const review = await axios.get(
    `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products/${productID}/reviews`
  );
  productDetail = res.data;
  sellerInfos = seller.data;
  reviews = review.data;
  return {
    props: {
      productDetail,
      sellerInfos,
      reviews,
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
