import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb">
        <li>
          <a href="#">ประเภทงานทั้งหมด</a>
        </li>
        <li>
          <a href="#">Graphic & Design</a>
        </li>
        <li>
          <a href="#">Logo</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
