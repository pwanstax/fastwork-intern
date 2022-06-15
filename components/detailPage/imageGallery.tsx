import React, {useEffect} from "react";

interface Props {
  product_image: string;
}

const ImageGallery: React.FC<Props> = ({product_image}) => {
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
        "gallery-slides"
      ) as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot");
      //   console.log(dots);

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
      slides[slideIndex - 1].style.display = " block";
      dots[slideIndex - 1].className += " active";
    }
  };

  const modalHandler = () => {
    var modal = document.getElementById("myModal")!;
    const images = document.querySelectorAll(
      "#myImg"
    ) as NodeListOf<HTMLImageElement>;
    var modalImg = document.getElementById("img01")! as HTMLImageElement;
    var captionText = document.getElementById("caption")! as HTMLElement;
    var span = document.getElementsByClassName("close")[0] as HTMLElement;
    var outerModal = document.getElementsByClassName("modal")[0] as HTMLElement;

    // console.log(images);

    images.forEach(
      (img) =>
        (img.onclick = function () {
          var self = this as HTMLImageElement;
          modal.style.display = "flex";
          modalImg.src = self.src;
        })
    );

    span.onclick = function () {
      modal.style.display = "none";
    };
    outerModal.onclick = function () {
      modal.style.display = "none";
    };
  };

  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
    modalHandler();
  }, []);

  const imageSrc = [
    product_image,
    "https://source.unsplash.com/random/710x530",
    "https://source.unsplash.com/random/710x531",
    "https://source.unsplash.com/random/710x532",
    "https://source.unsplash.com/random/710x533",
    "https://source.unsplash.com/random/710x534",
    "https://source.unsplash.com/random/710x529",
    "https://source.unsplash.com/random/710x528",
    "https://source.unsplash.com/random/710x527",
  ];
  const bottomRightImage = [
    ["https://source.unsplash.com/random/346x257", "image3"],
    ["https://source.unsplash.com/random/346x258", "image4"],
    ["https://source.unsplash.com/random/346x259", "image5"],
    ["https://source.unsplash.com/random/346x260", "image6"],
  ];
  return (
    <div className="gallery-container">
      <div className="first-image">
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="img01" />
        </div>
        {imageSrc.map((each) => (
          <div key={each} className="gallery-slides fade">
            <img className="image1" id="myImg" width="100%" src={each} />
          </div>
        ))}

        <a className="prev" onClick={(_) => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={(_) => plusSlides(1)}>
          ❯
        </a>
        <div className="dot-box">
          {imageSrc.map((_, idx) => (
            <span
              key={idx}
              className="dot"
              onClick={(_) => currentSlide(idx + 1)}
            ></span>
          ))}
        </div>
      </div>

      <img
        className="image2"
        width="100%"
        src="https://source.unsplash.com/random/346x256"
        id="myImg"
      />
      <div className="gallery">
        {bottomRightImage.map((each) => (
          <img
            key={each[1]}
            className={each[1]}
            width="100%"
            src={each[0]}
            id="myImg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
