import React from "react";

interface Props {
  name: string;
  avatar: string;
}

const SellerInfo: React.FC<Props> = ({name, avatar}) => {
  return (
    <div className="seller-info-container">
      <div className="seller-description">
        <div className="top-box">
          <img className="_mgr-24px" src={avatar} alt="avatar" />
          <div>
            <div className="seller-name _mgbt-12px">
              <h1>{name}</h1>
              <button className="tb-button -secondary -small">
                <i className="fa fa-commenting _mgr-4px" />
                ติดต่อผู้ขาย
              </button>
            </div>
            <p>
              นักออกแบบอิสระ (Freelance Creative Designer) เชี่ยวชาญในการออกแบบ
              ให้ตรงความต้องการของคุณ
              โดยยึดหลักการทำงานที่ต้องการช่วยเหลือลูกค้าในการสร้างงานออกแบบไม่ว่าจะเป็นงานจำพวก
              • 3D Perspective & 3D Model Design • Event & Exhibitions Design •
              Logo Design • Packaging Design • Graphic Design
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="seller-stat">
        <div>
          <i className="fa fa-address-card _fs-700"></i>
          <strong>01/2016</strong>
          <p>เป็นสมาชิก</p>
        </div>
        <div>
          <i className="fa fa-handshake _fs-700"></i>
          <strong>100 %</strong>
          <p>งานสำเร็จ</p>
        </div>
        <div>
          <i className="fa fa-shopping-cart _fs-700"></i>
          <strong>9 ครั้ง</strong>
          <p>ขายได้</p>
        </div>
        <div>
          <i className="fa fa-commenting _fs-700"></i>
          <strong>99</strong>
          <p>ตอบกลับ</p>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
