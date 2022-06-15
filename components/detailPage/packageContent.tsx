import React, {useState} from "react";

const PackageSection: React.FC = () => {
  const [plan, setPlan] = useState<number>(0);

  const data = [
    {
      topic: "BASIC",
      duration: "1 วัน",
      description:
        "งานออกแบบโลโก้ทุกชิ้นจะทำในโปรแกรม AI ออกแบบตามใจลูกค้า ไม่ขัดใจแน่นอนลูกค้าต้องการแบบไหนก็แบบนั้นเลย งานคุณภาพ จ้างเลยจ้างเลยงานออกแบบโลโก้ทุกชิ้นจะทำในโปรแกรม AI ออกแบบตามใจลูกค้าไม่ขัดใจแน่นอน ลูกค้าต้องการแบบไหนก็แบบนั้นเลย งานคุณภาพ จ้างเลยจ้างเลย",
    },
    {
      topic: "PRO",
      duration: "2 เดือน",
      description:
        "Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ",
    },
    {
      topic: "SUPER PRO",
      duration: "3 ปี",
      description:
        "ลูกค้าบอกความต้องการกับเราได้ทันที เพื่อเป็นประโยชน์ประกอบการออกแบบ และให้งานโดดเด่น ช่วยทำให้ภาพลักษณ์ของบริษัท หรือองค์กรมีความน่าเชื่อถือ เพิ่มยอดขาย ดึงดูด และน่าเข้าหาเป็นอย่างยิ่งลูกค้าบอกความต้องการกับเราได้ทันที เพื่อเป็นประโยชน์ประกอบการออกแบบ และให้งานโดดเด่น ช่วยทำให้ภาพลักษณ์ของบริษัท หรือองค์กรมีความน่าเชื่อถือ เพิ่มยอดขาย ดึงดูด และน่าเข้าหาเป็นอย่างยิ่ง",
    },
  ];
  return (
    <div className="package-container">
      <div className="package-content">
        <div className="package-panel">
          <div className="choose-plan">
            <button
              onClick={(_) => setPlan(0)}
              id="left"
              className={plan === 0 ? "active" : ""}
            >
              200฿<div className="border-bottom"></div>
            </button>
            <button
              onClick={(_) => setPlan(1)}
              className={plan === 1 ? "active" : ""}
            >
              2000฿<div className="border-bottom"></div>
            </button>
            <button
              onClick={(_) => setPlan(2)}
              id="right"
              className={plan === 2 ? "active" : ""}
            >
              200000฿<div className="border-bottom"></div>
            </button>
          </div>
          <div className="main-plan">
            <strong>แพ็กเกจ : {data[plan].topic}</strong>
            <p>{data[plan].description}</p>
            <ul>
              <li>
                <p className="left">ระยะเวลาในการทำงาน</p>
                <p className="right">{data[plan].duration}</p>
              </li>
              <li>
                <p className="left">ปรับแก้ชิ้นงานได้</p>
                <p className="right">1 ครั้ง</p>
              </li>
              <li>
                <p className="left">ออกแบบชิ้นงานให้เลือก</p>
                <p className="right">1 ชิ้น</p>
              </li>
              <li>
                <p className="left">ออกแบบนามบัตร</p>
                <p className="right">
                  <i className="fa fa-check"></i>
                </p>
              </li>
            </ul>
            <hr />
            <div className="package-checkbox">
              <label htmlFor="pCheckbox">ชำระในนามบริษัท</label>
              <input id="pCheckbox" type="checkbox" />
            </div>
            <p className="under">
              *เพื่อชำระในนามบริษัทโปรด{" "}
              <a href="https://auth-staging.fastwork.co/oauth/authorize">
                กรอกข้อมูลบริษัท
              </a>
            </p>
            <button>สนใจจ้าง</button>
            <p className="non-pay">คุณจะยังไม่เสียค่าใช้จ่าย</p>
          </div>
        </div>
        <div className="package-guarantee">
          <img
            src="https://staging.fastwork.co/static-v4/images/guaranteed.svg"
            width="40px"
            alt="guaranteed"
          />
          <p>
            จ้างงานผ่าน Fastwork การันตีไม่โดนโกง
            ติดตามงานจากฟรีแลนซ์และขอรับเงินคืนได้{" "}
            <a href="https://static.fastwork.co/contents/guarantee">
              อ่านเงื่อนไขและสิทธิ์การคุ้มครองเพิ่มเติม
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
