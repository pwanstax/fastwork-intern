import React, {useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

interface Props {
  name: string;
  product_image: string;
  id: string;
}
interface productUser {
  createdAt: string;
  name: string;
  avatar: string;
  productId: string;
  id: string;
}
var productsUser: productUser = {
  createdAt: "",
  name: "",
  avatar: "",
  productId: "",
  id: "",
};

const ProductCard: React.FC<Props> = ({name, product_image, id}) => {
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const router = useRouter();

  const toDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    window.open(`/${id}`);
    // router.push(`/${id}`);
  };

  const getUser = async () => {
    try {
      const data: productUser[] = (
        await axios.get(
          `https://627cc2d8e5ac2c452af617ba.mockapi.io/api/products/1/users`
        )
      ).data;
      setAvatar(data[0].avatar);
      setUsername(data[0].name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  // const username = "Barbara Champlin";
  // const avatar =
  //   "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/121.jpg";
  return (
    <div
      onClick={(e) => toDetail(e)}
      className="tb-card-product u-raised-4-hover product-card"
    >
      <div className="slot-avatar">
        <img src={avatar} alt="Avatar" className="tb-avatar -small" />
      </div>
      <div className="slot-seller-name">{username}</div>
      <div className="slot-favorite">
        <i className="fa-solid fa-heart-crack" />
      </div>
      <div className="slot-image">
        <img src={product_image} alt="Image" />
      </div>
      <div className="slot-title">{name}</div>
      <div className="slot-rating">
        <div className="_cl-mute _mgt-4px">4.9(39)</div>
      </div>
      <div className="slot-label">
        <div className="tb-label">New</div>
      </div>
      <div className="slot-price">
        <div className="_cl-mute _fs-200">เริ่มต้น</div>
        <div className="_cl-primary-500">$1,000</div>
      </div>
    </div>
  );
};

export default ProductCard;
