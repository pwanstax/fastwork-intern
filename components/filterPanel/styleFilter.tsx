import {Dispatch, SetStateAction} from "react";

interface Props {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}
const StyleFilter: React.FC<Props> = ({status, setStatus}) => {
  const styleArray = [
    "ฟรีสไตล์",
    "เวคเตอร์ สัญลักษณ์",
    "การ์ตูนและภาพเหมือน",
    "ลายเส้นและภาพวาดลงสี",
    "ตัวอักษรและลายเซ็น",
    "วินเทจ",
    "มินิมอล",
    "3D",
    "เสริมดวง",
  ];

  return (
    <div className="dropdown">
      <button id="style" className="topic" onClick={(_) => setStatus(!status)}>
        สไตล์{" "}
        <i
          className={status ? "fa fa-angle-up" : "fa fa-angle-down"}
          aria-hidden="true"
        />
      </button>

      <div className="filter-box">
        <div className={status ? "appear" : "disappear"}>
          <p className="headline">สไตล์</p>
          <hr className="solid" />
          <div className="style-list">
            {styleArray.map((each) => (
              <div key={each} className="style-button">
                <label className="tag" htmlFor={each}>
                  {each}
                </label>
                <input className="tag" id={each} type="checkbox" />
              </div>
            ))}
          </div>
          <hr className="solid" />
          <div className="filter-footer">
            <button className="clear-button">ล้างตัวกรอง</button>
            <button className="confirm-button">ยืนยัน</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleFilter;
