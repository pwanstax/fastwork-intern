const AllFilter: React.FC = () => {
  const openNav = () => {
    document.getElementById("Sidenav")!.style.width = "558px";
    document.getElementById("backdrop")!.style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("backdrop")!.style.width = "0";
    document.getElementById("Sidenav")!.style.width = "0";
  };

  return (
    <div className="filter-container">
      <div className="dropdown">
        <button className="all-button" onClick={(_) => openNav()}>
          ทั้งหมด <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <div id="Sidenav" className="sidenav">
          <div className="filter-header">
            <a className="closebtn" onClick={(_) => closeNav()}>
              &times;
            </a>
            <hr className="solid" />
          </div>
          <div className="total-container">
            <div className="total-box-container">
              <p className="headline fix-top-headline ">
                ภาษาที่ใช้สื่อสารกับผู้ว่าจ้าง
              </p>
              <div className="total-checkbox">
                <label htmlFor="Thai">Thai</label>
                <input id="Thai" type="checkbox" />
              </div>
              <div className="total-checkbox">
                <label htmlFor="English">English</label>
                <input id="English" type="checkbox" />
              </div>
            </div>
            <div className="total-box-container">
              <hr className="solid" />
              <p className="headline">ระยะเวลาการทำงาน</p>
              <div className="total-list">
                <button className="total-button">ใน 24 ชม.</button>
                <button className="total-button">ใน 3 วัน</button>
                <button className="total-button">ใน 7 วัน</button>
              </div>
            </div>
            <div className="total-box-container">
              <hr className="solid" />
              <p className="headline">ช่วงราคา</p>
              <div className="form-container">
                <input type="text" placeholder="0" />
                <p>-</p>
                <input type="text" placeholder="ราคาสูงสุด" />
              </div>
            </div>
            <div className="total-box-container">
              <hr className="solid" />
              <p className="headline">คะแนนที่ได้รับ</p>
              <div className="total-list">
                <button className="total-button">
                  <i className="fa fa-star" />5
                </button>
                <button className="total-button">
                  <i className="fa fa-star" />4 ขึ้นไป
                </button>
                <button className="total-button">
                  <i className="fa fa-star" />3 ขึ้นไป
                </button>
                <button className="total-button">
                  <i className="fa fa-star" />2 ขึ้นไป
                </button>
                <button className="total-button">
                  <i className="fa fa-star" />1 ขึ้นไป
                </button>
                <button className="total-button">ยังไม่มีคะแนน</button>
              </div>
            </div>
          </div>
          <div className="filter-footer">
            <button className="clear-button">ล้างตัวกรอง</button>
            <button className="confirm-button">ยืนยัน</button>
          </div>
        </div>
        <div id="backdrop" className="backdrop"></div>
      </div>
    </div>
  );
};

export default AllFilter;
