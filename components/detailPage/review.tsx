import React, {Fragment} from "react";

interface Props {
  reviews: BuyerReview[];
}
interface BuyerReview {
  createdAt: string;
  comment: string;
  id: string;
  productId: string;
}

const Review: React.FC<Props> = ({reviews}) => {
  return (
    <Fragment>
      <div className="score-box _pdv-12px">
        <div className="_mgr-12px _mgr-48px-sm ">
          <div className="lo-12 _gg-4px-sm _jtfit-ct _alct-ct _w-64px _h-64px _w-128px-sm _h-128px-sm _bdrd-max _bgcl-primary-100 _ffml-secondary">
            <strong className="_fs-700 _fs-900-sm _cl-primary-500">5.0</strong>
            <div className="_fs-200 _cl-dark-secondary">จาก 5.0</div>
          </div>
        </div>
        <div className="top _bdlw-1px-sm _bdcl-gray-300">
          <div className="part-point">
            <div className="each">
              <p className="_ffml-secondary _fs-200 _fs-300-sm">
                ความเร็วในการตอบ
              </p>
              <div className="star-box ">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="each">
              <p className="_ffml-secondary _fs-200 _fs-300-sm">
                ความเร็วในการตอบ
              </p>
              <div className="star-box ">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="each">
              <p className="_ffml-secondary _fs-200 _fs-300-sm">
                ความเร็วในการตอบ
              </p>
              <div className="star-box ">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="each">
              <p className="_ffml-secondary _fs-200 _fs-300-sm">
                ความเร็วในการตอบ
              </p>
              <div className="star-box ">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-box _bgcl-gray-100 _pd-24px">
        <div className="_dp-f">
          <img
            src="https://storage.googleapis.com/fastwork-static/971a6a43-23b6-4297-aee6-a8f685d1cb6b.jpg"
            alt="static"
            width="36px"
            height="36px"
          />
          <div className="_mgl-16px _f-1 _dp-f _jtfct-spbtw _fs-300">
            <div>
              <strong className="_cl-primary-500">Pawan K.</strong>
              <div className="_dp-f _alit-ct _mgt-4px">
                <div className="_cl-dark-secondary">15/06/22</div>
              </div>
            </div>
            <div>
              <i className="fas fa-star _cl-warning-500"></i>
              <strong>5.0</strong>
            </div>
          </div>
        </div>
        <div className="_fs-300 _wsp-pw _mgt-12px _wb-bw">สวย สวย สวย</div>
      </div>
    </Fragment>
  );
};

export default Review;
