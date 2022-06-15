import React from "react";
import PackageBox from "./packageBox";
import SellerInfo from "./sellerInfo";
import Review from "./review";

interface Props {
  name: string;
  detail: string;
  sellerInfo: SellerInfo;
  reviews: BuyerReview[];
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

const InfoSection: React.FC<Props> = ({name, detail, sellerInfo, reviews}) => {
  return (
    <div className="info-container">
      <h1>{name}</h1>
      <p>{detail}</p>
      <div>
        <strong>ขั้นตอนการทำงาน</strong>
        <p>วู้วๆๆๆๆๆ วี้ๆๆๆๆ [ฮัลโหลเทส]</p>
        <ul>
          <li>
            <p>1. อะแฮ่มๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ</p>
          </li>
          <li>
            <p>2. แง่มๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ</p>
          </li>
        </ul>
      </div>
      <div className="all-package">
        <h1>แพ็กเกจ</h1>
        <PackageBox />
      </div>
      <div className="all-package">
        <h1>ฟรีแลนซ์</h1>
        <SellerInfo name={sellerInfo.name} avatar={sellerInfo.avatar} />
      </div>
      <div className="all-package">
        <h1>รีวิวจากผู้ว่าจ้าง (1)</h1>
        <Review reviews={reviews} />
      </div>
    </div>
  );
};

export default InfoSection;
