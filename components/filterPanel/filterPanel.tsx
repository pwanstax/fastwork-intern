import {useEffect, useState} from "react";
import TypeFilter from "./typeFilter";
import StyleFilter from "./styleFilter";
import AllFilter from "./allFilter";
import ToggleFilter from "./toggleFilter";

const FilterPanel: React.FC = () => {
  const [typeStatus, setTypeStatus] = useState<boolean>(false);
  const [styleStatus, setStyleStatus] = useState<boolean>(false);

  const closeNav = () => {
    document.getElementById("backdrop")!.style.width = "0";
    document.getElementById("Sidenav")!.style.width = "0";
  };

  useEffect(() => {
    if (!!typeof window) {
      window.onclick = function (event) {
        var btn = event.target! as HTMLButtonElement;
        console.log(btn.className);
        if (btn.id === "style") {
          setTypeStatus(false);
        }
        if (btn.id === "type") {
          setStyleStatus(false);
        }
        if (
          btn.className !== "filter-footer" &&
          btn.className !== "topic" &&
          btn.className !== "appear" &&
          btn.className !== "headline" &&
          btn.className !== "type-list" &&
          btn.className !== "style-list" &&
          btn.className !== "style-button" &&
          btn.className !== "tag"
        ) {
          setTypeStatus(false);
          setStyleStatus(false);
        }
        if (btn.className === "backdrop") {
          closeNav();
        }
      };
    }
  }, []);
  return (
    <div className="filter-container">
      <div className="dropdown-container">
        <TypeFilter status={typeStatus} setStatus={setTypeStatus} />
        <StyleFilter status={styleStatus} setStatus={setStyleStatus} />
        <AllFilter />
      </div>
      <div className="toggle-container">
        <ToggleFilter />
      </div>
    </div>
  );
};

export default FilterPanel;
