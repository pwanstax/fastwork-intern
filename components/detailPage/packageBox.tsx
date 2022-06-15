import React, {Fragment} from "react";

const PackageBox: React.FC = () => {
  const data = [
    {
      topic: "BASIC : เหมาะสำหรับผู้เริ่มต้น",
      duration: "ระยะเวลาในการทำงาน 1 วัน",
      description:
        "งานออกแบบโลโก้ทุกชิ้นจะทำในโปรแกรม AI ออกแบบตามใจลูกค้า ไม่ขัดใจแน่นอนลูกค้าต้องการแบบไหนก็แบบนั้นเลย งานคุณภาพ จ้างเลยจ้างเลยงานออกแบบโลโก้ทุกชิ้นจะทำในโปรแกรม AI ออกแบบตามใจลูกค้าไม่ขัดใจแน่นอน ลูกค้าต้องการแบบไหนก็แบบนั้นเลย งานคุณภาพ จ้างเลยจ้างเลย",
    },
    {
      topic: "PRO : เหมาะสำหรับผู้เริ่มต้นมั้ง",
      duration: "ระยะเวลาในการทำงาน 2 วัน",
      description:
        "Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ Logo จ้าาาา ชื่อยาวมาก ๆ",
    },
    {
      topic: "SUPER PRO : เหมาะสำหรับผู้เริ่มต้นมาสักพัก",
      duration: "ระยะเวลาในการทำงาน 3 วัน",
      description:
        "ลูกค้าบอกความต้องการกับเราได้ทันที เพื่อเป็นประโยชน์ประกอบการออกแบบ และให้งานโดดเด่น ช่วยทำให้ภาพลักษณ์ของบริษัท หรือองค์กรมีความน่าเชื่อถือ เพิ่มยอดขาย ดึงดูด และน่าเข้าหาเป็นอย่างยิ่งลูกค้าบอกความต้องการกับเราได้ทันที เพื่อเป็นประโยชน์ประกอบการออกแบบ และให้งานโดดเด่น ช่วยทำให้ภาพลักษณ์ของบริษัท หรือองค์กรมีความน่าเชื่อถือ เพิ่มยอดขาย ดึงดูด และน่าเข้าหาเป็นอย่างยิ่ง",
    },
  ];
  return (
    <Fragment>
      {data.map((each) => (
        <div key={each.topic} className="package">
          <strong className="_ffml-secondary">{each.topic}</strong>
          <div className="time-range _cl-dark-secondary _mgt-8px">
            <i className="far fa-calendar"></i>
            <p>{each.duration}</p>
          </div>
          <p className="description">{each.description}</p>
          <hr className="_mgv-16px" />
          <div className="confirm-box">
            <div className="left-side">
              <div className="package-checkbox">
                <input className="_mgr-8px" id="cCheckbox" type="checkbox" />
                <label htmlFor="cCheckbox">ชำระในนามบริษัท</label>
              </div>
              <p>
                เพื่อชำระในนามบริษัทโปรด <a href="">กรอกข้อมูลบริษัท</a>
              </p>
            </div>
            <div>
              <button className="tb-button -small _mgl-at">สนใจจ้าง</button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default PackageBox;
