import React, {useEffect} from "react";

const Promotions: React.FC = () => {
  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  const currentSlide = (n: number) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n: number) => {
    if (typeof window !== "undefined") {
      let i;
      let slides = document.getElementsByClassName(
        "mySlides"
      ) as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      console.log(dots[slideIndex - 1]);

      dots[slideIndex - 1].className += " active";
    }
  };
  let slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="promotion-container">
      <div className="qualified-box">
        <img
          src="https://staging.fastwork.co/static-v4/images/guaranteed.svg"
          alt="guaranteed"
          width="40px"
        />
        <p>งานคุณภาพ ปลอดภัย ดูแลตลอดการจ้างงาน</p>
        <a href="https://static.fastwork.co/contents/guarantee">
          อ่านเพิ่มเติม &gt;
        </a>
      </div>
      <div className="middle-box">
        <img
          src="https://staging.fastwork.co/static-v4/images/product-listion-promotion.jpg"
          alt="product-listion-promotion"
          height="100px"
        />
        <div>
          <strong>ให้เราช่วยเลือกฟรีแลนซ์ให้คุณ</strong>
          <div className="support">
            <p>
              <i className="fa fa-check" />
              คุมงบได้เอง
            </p>
            <p>
              <i className="fa fa-check" />
              มีผู้ช่วยดูแลจนจบงาน
            </p>
            <p>
              <i className="fa fa-check" />
              ตอบเร็วแน่นอน
            </p>
            <p>
              <i className="fa fa-check" />
              การันตีคุณภาพงาน
            </p>
          </div>
          <button>ให้เราช่วยเลือกฟรีแลนซ์</button>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <img
            src="https://images.ctfassets.net/fm8byl79je66/5Z6LT7Z6Pn6MpadouhL6JA/637a703c89bea9b25ed5116a01b39608/2-guarantee-Subcat-347x182.jpg"
            width="350px"
          />
        </div>

        <div className="mySlides fade">
          <img
            src="https://images.ctfassets.net/fm8byl79je66/2gh6cbsZmRLpF6CiTysxFq/bdecebff8677555b674c7d83dd78d891/PA-Banner_Subcat-Banner_347x182_02.jpg"
            width="350px"
          />
        </div>

        <div className="mySlides fade">
          <img
            src="https://images.ctfassets.net/fm8byl79je66/5ZRHDCFjodRPoQDeLSOnXi/8b0f523a142959f490a43ee4699da44a/_DM_2020-05-20-Banner-Milestone-HB_desktop.jpg"
            width="350px"
          />
        </div>
        <div className="mySlides fade">
          <img
            src="https://images.ctfassets.net/fm8byl79je66/2x6eQe4hckoTI6eH3IE1vy/223d4702cc4dc02e2b9d5a830f5547dc/AW2-FW-alert-Subcat-347x182.jpg"
            width="350px"
          />
        </div>
        <a className="prev" onClick={(_) => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={(_) => plusSlides(1)}>
          ❯
        </a>
        <div className="dot-box">
          <span className="dot" onClick={(_) => currentSlide(1)}></span>
          <span className="dot" onClick={(_) => currentSlide(2)}></span>
          <span className="dot" onClick={(_) => currentSlide(3)}></span>
          <span className="dot" onClick={(_) => currentSlide(4)}></span>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
