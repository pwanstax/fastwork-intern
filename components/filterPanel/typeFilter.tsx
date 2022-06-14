import {Dispatch, SetStateAction} from "react";

interface Props {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

const TypeFilter: React.FC<Props> = ({status, setStatus}) => {
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div className="dropdown">
      <button id="type" className="topic" onClick={(_) => handleClick()}>
        ลักษณะการใช้งาน{" "}
        <i
          className={status ? "fa fa-angle-up" : "fa fa-angle-down"}
          aria-hidden="true"
        />
      </button>

      <div className={status ? "appear" : "disappear"}>
        <p className="headline">ลักษณะการใช้งาน</p>
        <hr className="solid" />
        <div className="type-list">
          <button className="button">โลโก้แบรนด์สินค้า</button>
          <button className="button">โลโก้บริษัท</button>
          <button className="button">โลโก้ร้านอาหาร</button>
          <button className="button">โลโก้งานอีเว้นท์</button>
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
