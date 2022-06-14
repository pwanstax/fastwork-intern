import {Fragment} from "react";

const ToggleFilter: React.FC = () => {
  return (
    <Fragment>
      <div className="professional-toggle">
        <div className="bio-checkbox -switch">
          <label htmlFor="checkbox1">
            <img
              src="https://storage.googleapis.com/fastwork-asset/product_options/badge_professional.png"
              alt="badge_professional"
              height="26px"
            />
          </label>
          <input id="checkbox1" type="checkbox" />
        </div>
      </div>
      <div className="professional-toggle">
        <div className="bio-checkbox -switch color-switch">
          <label htmlFor="checkbox2">
            <img
              src="https://storage.googleapis.com/fastwork-asset/product_options/badge_milestone_th_20220607.png"
              height="26px"
              alt="badge_milestone"
            />
          </label>
          <input id="checkbox2" type="checkbox" />
        </div>
      </div>
    </Fragment>
  );
};

export default ToggleFilter;
